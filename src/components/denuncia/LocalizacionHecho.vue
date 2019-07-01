<template>
  <div id="localizacion">
     <!-- calle -->
     <div class="form-group">
      <label for="calle">
       <div>Calle </div>
      </label>
      <input type="text" class="form-control" name="calle" id="calle"
        v-model="localizacion.calle">
      </div>

       <!-- numero -->
      <div class="form-group">
      <label for="calle">
       <div>Número</div>
      </label>
      <input type="text" class="form-control" name="calle" id="calle"
        v-model="localizacion.numero">
      </div>



    <!--
    <div class="row">
      <div id="app" style="width: 200px ; height :200px">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </div>
    -->
    <div id="actions">
    <div class="form-cancel-button">
      <button type="button" class="btn btn-primary" @click="cancelar">Cancelar</button>
      <button type="button" class="btn btn-primary" @click="anterior">Anterior</button>
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
      title="Salir"
    >
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
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  props: {
    localizacion: Object
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      latitud: 0,
      longitud: 0,
      zoom: 8,
      center: L.latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482)
    };
  },
  methods: {
      siguiente() {
      this.submitted = true;
      this.$emit('increment-step');

       /*this.$validate()
        .then(function(success) {

        })
        .catch(error => {
          console.log(error);
        });*/
    },
    anterior() {
      this.$emit('decrement-step')
    },
    cancelar() {
      console.log(this.$refs);
      this.$refs["modal-cancelar"].show();
    },
    cancelarModal() {
      this.$refs["modal-cancelar"].hide();
    },
    aceptarModal() {
      alert("aceptar modal");
    }
  },
  created(){
     console.log("created localizacion");
     this.$scrollTo('#localizacion', 'body', 2000);
  },
  mounted() {
    this.$scrollTo('#localizacion','body', 2000);
  },
  beforeUpdate(){
    console.log("beforeUpdate localizacion");
    this.$scrollTo('#localizacion','body',2000);
  }
};
</script>
<style>
#app {
    width: 100%;
    height: 500px;
    z-index: 0 !important;
}
</style>
