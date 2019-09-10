<template>
  <div id="localizacion">
     <h4>LOCALIZACION DEL HECHO</h4>
     <!-- calle -->
     <div class="form-group">
      <label for="calle"> Calle (*)</label>
      <input type="text" class="form-control" name="calle" id="calle" v-model="localizacion.calle"
       v-bind:class="{'is-invalid' :  validation.hasError('localizacion.calle')}"
       placeholder="Ejemplo : Calle la angostura">
      <div v-if="validation.hasError('localizacion.calle')" class="text-danger">
        {{ validation.firstError('localizacion.calle')}}
      </div>
      </div>


      <div class="row">
      <!-- numero -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Número</label>
      <input type="number" min="0" class="form-control" name="numero" id="numero" v-model="localizacion.numero">
      </div>
      </div>

      <!-- piso -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Piso</label>
      <input type="number" min="0" class="form-control" name="piso" id="piso" v-model="localizacion.piso"/>
      </div>
      </div>
      <!-- puerta -->
      <div class="col">
      <div class="form-group">
      <label for="puerta">Puerta</label>
      <input type="text" class="form-control" name="puerta" id="puerta" v-model="localizacion.puerta"/>
      </div>
      </div>
      </div>

     <!-- mapa -->
     <div id="map" class="map"></div>

     <div class="form-group">
     <label>Detalle de la ubicación</label>
     <input type="text" class="form-control" name="detalle" v-model="localizacion.detalle"
      placeholder="Ej: Casa de rejas negras, timbre 2A"/>
     </div>
     <br>
     <hr>
    <div id="actions">
    <div class="form-cancel-button">
      <button type="button" class="btn btn-primary" @click="cancelar">Cancelar</button>
    </div>

    <div class="form-right-button">
      <button type="button" class="btn btn-primary" @click="siguiente">Siguiente</button>
    </div>
    </div>
      <!-- modal -->
      <b-modal
      ref="modal-cancelar"
      headerClass="header-toc"
      hide-footer
      cancel-title="Cancelar"
      ok-title="Aceptar"
      title="Salir">
      <div class="d-block text-center">
        <p class="warning ng-binding">¿Estás seguro de salir y borrar todos los datos?</p>
      </div>
      <footer class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="cancelarModal">NO</button>
        <button type="button" class="btn btn-primary" @click="aceptarModal">SI</button>
      </footer>
    </b-modal>
  </div>
</template>
<script>
import SimpleVueValidator from "simple-vue-validator";
const Validator = SimpleVueValidator.Validator;

import Modal from '../commons/Modal'

export default {
  props: {
    localizacion: Object
  },
  components: {
    Modal : Modal
  },
  validators:{
   'localizacion.calle':function ( value ){
     return Validator.custom(function() {
        if ( Validator.isEmpty( value )) {
           return "Debe Ingresar Calle"
        }
     })
   }
  },
  data() {
    return {
       map : '',
       latitud : 0,
       longitud : 0
    };
  },
  methods: {
    siguiente() {
      this.$validate().then( success => {
       if ( success ) {
          console.log("increment-step");
          this.$emit('increment-step');
         } else {
             this.scrollToTop(2000);
         }
       })
    },
     scrollToTop: function (scrollDuration) {
        var cosParameter = window.scrollY / 2,
                    scrollCount = 0,
                    oldTimestamp = performance.now();

        function step(newTimestamp) {
         scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
         if (scrollCount >= Math.PI) window.scrollTo(0, 0);
         if (window.scrollY === 0) return;
         window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
         oldTimestamp = newTimestamp;
         window.requestAnimationFrame(step);
       }
      window.requestAnimationFrame(step);
    },
     cancelarModal() {
      this.$refs["modal-cancelar"].hide();
    },
    aceptarModal() {
      this.$router.push('/genearl');
    },
    cancelar() {
      console.log(this.$refs);
      this.$refs["modal-cancelar"].show();
    },
    anterior() {
      this.$emit('decrement-step')
    },
    initMap( localizacion , latitud = null  , longitud = null) {
       this.latitud = -24.1945700;
       this.longitud= -65.2971200;

      if ( latitud != null && longitud != null ) {
          this.latitud = latitud ;
          this.longitud = longitud ;
      }
      this.localizacion.latitud = this.latitud;
      this.localizacion.longitud = this.longitud;

      this.map = L.map('map').setView( [ this.latitud , this.longitud ] , 12);
      this.tileLayer = L.tileLayer( 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',{
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
      });
     this.tileLayer.addTo(this.map);

     var marker =  L.marker( [ this.latitud , this.longitud ] ,{
          draggable : true
     }).addTo(this.map);

     marker.bindPopup("<b>Arrastre el marcador para <br> indicar una posición.</b>").openPopup();

     marker.on('dragend', function( event) {
      if ( event != null && event != undefined ) {
        var marker = event.target;  // you could also simply access the marker through the closure
        var result = marker.getLatLng();  // but using the passed event is cleaner
        this.latitud = result.lat;
        this.longitud = result.lng;
        localizacion.latitud = result.lat;
        localizacion.longitud = result.lng;

      }

     });

    }
  },
  created(){
     window.scrollTo(0,0)
  },
  // Code to run when app is mounted
  mounted() {
    this.$getLocation({
       enableHighAccuracy: false, //defaults to false
       maximumAge: 1 //defaults to 0
    }).then(coordinates => {
       this.initMap( this.localizacion, coordinates.lat, coordinates.lng);
    }).catch( error => {
       this.initMap(this.localizacion, null , null );
    });

  }
};
</script>
<style>
#app {
    width:  100%;
    height: 200px;
    z-index: 0 !important;
}
.map { height: 500px; }
</style>
