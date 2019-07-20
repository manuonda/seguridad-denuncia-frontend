<template>
  <div id="hecho">
       <h4>CARACTERÍSTICA DEL HECHO</h4>
    <div class="row">
      <div class="form-group">
        <label>Descripción del Hecho(*)</label>
        <textarea
          type="text" rows="11" cols="150" name="descripcion" v-model="hecho.descripcion"
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
      <tr v-for="item in hecho.files" >
         <td >
            <strong> {{ item.name }} </strong>
            <br>
            <img :src="item.image" style="width: 220px;">
          </td>
          <td>{{ item.size}}</td>
          <td>{{ item.type }}</td>
          <td> <button type="button" class="btn btn-danger btn-xs ng-binding" @click="removeItem(item)">
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

export default {
  props: {
    hecho: Object
  },
  validators :{
    'hecho.descripcion' : function ( value ) {
      return Validator.custom(function() {
          if( Validator.isEmpty(value )) {
            return "Debe ingresar una descripción del Hecho"
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

  }
};
</script>
<style>
</style>
