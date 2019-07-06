<template>
  <div id="caracteristica">
    <div class="row">
      <div class="form-group">
        <label>Descripción del Hecho(*)</label>
        <textarea
          type="text" rows="11" cols="150" name="descripcion" v-model="caracteristica.descripcion"
          v-bind:class="{'is-invalid' :  validation.hasError('descripcion.descripcion')}"/>
      </div>
       <div v-if="validation.hasError('caracteristica.descripcion')" class="text-danger">
         {{validation.firstError('caracteristica.descripcion')}}</div>
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
        v-bind:disabled="caracteristica.files.length >= 3"
      />
      files.length {{ caracteristica.files.length}}
    </div>
    <div class="form-group" v-show="caracteristica.files.length > 0">
      <table class="table">
    <thead>
      <tr>
        <th width="50%">
          Nombre
        </th>
        <th aria-hidden="false">
          Tamaño
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
      <tr v-for="item in caracteristica.files" >
         <td >
            <strong> {{ item.name }} </strong>
            <br>
            <img :src="item.image" style="width: 320px;">
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
    caracteristica: Object
  },
  validators :{
    'caracteristica.descripcion' : function ( value ) {
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
      var sizeVector = this.caracteristica.files.length ;
      console.log ( sizeVector );
      var cantFaltante = 3 - sizeVector ;
      console.log("cant Faltante : ", cantFaltante);


      for (let i = 0; i < files.length ; i++) {
        if ( i < cantFaltante ) {
           var reader = new FileReader();
           var file = files[i];
           const fileReader = new FileReader();
           fileReader.onload = e => {
           this.caracteristica.files.push({
                name  : files[i].name,
                size  : files[i].size,
                type  : files[i].type,
                image : e.target.result
              });
            };
            fileReader.readAsDataURL(file);
          }
        }

    },
    siguiente() {
      this.$validate().then( success => {
       if ( success ) {
          console.log("increment-step");
          this.$emit('increment-step');
         }
       });
    },
    removeItem (image ) {
      var indexOf = this.caracteristica.files.indexOf( image );
      this.caracteristica.files.splice ( indexOf, 1 );
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
  created() {
    console.log(this.caracteristica);
  },
  mounted() {

  }
};
</script>
<style>
</style>
