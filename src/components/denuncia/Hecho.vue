<template>
  <div id="hecho">
    <h4>CARACTERÍSTICA DEL HECHO</h4>
       <div class="row">
         <div class="">
         <div class="form-group">
         <label>Tipo de Denuncia(*)</label>
       <!--<fieldset class="form-group">-->

       <select class="form-control" v-model="hecho.tipoDenuncia"
        v-bind:class="{'is-invalid' :  validation.hasError('hecho.tipoDenuncia')}">
       <option class="form-control"  v-for="item in items"  :value="item.id_tipo_denuncia"  v-bind:key="item.id_tipodenuncia"> {{ item.nombre}}</option>
       </select>
       <!-- <div v-for="item in items" v-bind:key="item.id_tipo_denuncia">
       <input type="radio"
              v-model="hecho.tipoDenuncia"
              class="form-check-input"
              name="optionsRadios"
              id="optionsRadios2" :value="item.id_tipo_denuncia"
               v-bind:class="{'is-invalid' :  validation.hasError('hecho.tipoDenuncia')}">
           <label class="label-none" >{{ item.nombre }}</label>
      </div>
      </fieldset>-->
      <div v-if="validation.hasError('hecho.tipoDenuncia')" class="text-danger">
         {{validation.firstError('hecho.tipoDenuncia')}}</div>
      </div>
      </div>
     </div>

    <div class="row">
      <div class="form-group">
        <label for="descripcion">Descripción del Hecho(*)</label>
        <textarea
          type="text" id="descripcion" rows="11" cols="150" name="descripcion" v-model="hecho.descripcion"
          class="form-control"
          v-bind:class="{'is-invalid' :  validation.hasError('hecho.descripcion')}"/>

      </div>
       <div v-if="validation.hasError('hecho.descripcion')" class="text-danger">
         {{validation.firstError('hecho.descripcion')}}</div>
    </div>

    <h3>Adjuntar Imágenes de Evidencia</h3>
    <span class="file-validations">Se pueden enviar hasta 3 archivos de 5MB cada uno</span>
    <div class="form-group">
      <input
        type="file"
        multiple
        ref="fileUpload"
        @change="uploadFileReference"
        accept=".jpg, .png, .jpeg"
        v-bind:disabled="hecho.files.length >= 3"
      />

    </div>
    <div class="form-group" v-show="hecho.files.length > 0">

    <table class="table">
    <thead>
      <tr>
        <th width="50%">
          Nombre
        </th>
        <th aria-hidden="false">
          Tamaño MB
        </th>
        <th aria-hidden="false">
          Tipo
        </th>
        <th class="ng-binding">
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in hecho.files"  v-bind:key="item.name" >
         <td >
            <strong> {{ item.name }} </strong>
            <br>
            <img class="image" :src="item.image" >
          </td>
          <td>{{ item.size}}</td>
          <td>{{ item.type }}</td>
          <td> <button type="button" class="btn btn-danger btn-xs" @click="removeItem(item)">
            <span class="glyphicon glyphicon-trash"></span> Eliminar
          </button>
        </td>

        </tr>


    </tbody>
  </table>

    </div>
    <hr>
     <div id="actions">
    <div class="form-cancel-button">
      <button type="button" class="btn btn-primary" @click="anterior">Anterior</button>
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
import SimpleVueValidator from "simple-vue-validator";
const Validator = SimpleVueValidator.Validator;
import axios from 'axios';


export default {
  props: {
    hecho: Object
  },
  data(){

    return {
       items: [
          { message: 'Foo' },
          { message: 'Bar' }
         ]
    }

  },
  validators :{
    'hecho.descripcion' : function ( value ) {
      return Validator.custom(function() {
          if( Validator.isEmpty(value )) {
            return "Debe ingresar una descripción del Hecho"
          }
      })
    },
    'hecho.tipoDenuncia' : function ( value ) {
      return Validator.custom(function() {
          if( Validator.isEmpty(value )) {
            return "Debe Seleccionar Tipo Denuncia"
          }
      })
    }
  },
  methods: {
    uploadFileReference() {
      var files = this.$refs.fileUpload.files;
      console.log( " files antes ",files );
      console.log(" opcion 0 => ",files[0].name);

      if ( files.length > 3 ) {
        // fix show alert boostrap
        alert("Se pueden adjuntar hasta 3 archivos ");
      }
      var sizeVector = this.hecho.files.length ;
      var cantFaltante = 3 - sizeVector ;
      for (let i = 0; i < files.length ; i++) {
        if ( i < cantFaltante ) {
           var reader = new FileReader();
           var file = files[i];
           const fileReader = new FileReader();
           fileReader.onload = e => {
             console.log( "size image ",files[i].size /  (1024*1024).toFixed(2));
           this.hecho.files.push({
                name  : files[i].name,
                size  : (files[i].size / Math.pow(1024,2)),
                type  : files[i].type,
                image : e.target.result,
                file  : files[i]
              });
            };
            fileReader.readAsDataURL(file);
          }
        }
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
    siguiente() {
      this.$validate().then( success => {
       if ( success ) {
          this.$emit('increment-step');
         } else {
           this.scrollToTop(2000);
         }
       });
    },
    removeItem (image ) {
      var indexOf = this.hecho.files.indexOf( image );
      this.hecho.files.splice ( indexOf, 1 );
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
       this.$router.push('/general');
    }
  },
  created() {
     window.scrollTo(0,0)
  },
  mounted() {
     axios.get('http://200.43.219.66:4000/tipoDenuncia/list') //produccion
     // axios.get('http://192.168.0.89:4000/tipoDenuncia/list') //oficina
     // axios.get('http://localhost:4000/tipoDenuncia/list') //oficina
      .then((result) => {
       console.log("result ", result );
       this.items = result.data;
     }).catch( error => {
         console.log('error : ', error );
     });
  }
};
</script>
<style>
.label-none {
  font-weight : normal;
}
</style>
