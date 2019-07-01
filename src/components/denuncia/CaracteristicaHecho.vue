<template>
  <div id="caracteristica">
    <div class="row">
      <div class="form-group">
        <label>Descripción del Hecho</label>
        <textarea
          type="text"
          class="form-control"
          rows="11"
          cols="150"
          name="descripcion"
          v-model="caracteristica.descripcion"
        />
      </div>
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
          <td>{{ item.name}}</td>
          <td>{{ item.size }}</td>
          <td> <button type="button" class="btn btn-danger btn-xs ng-binding" @click="removeItem(item)">
            <span class="glyphicon glyphicon-trash"></span> Eliminar
          </button>
        </td>

        </tr>


    </tbody>
  </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    caracteristica: Object
  },
  methods: {
    uploadFileReference(e) {
      if (this.$refs.fileUpload.files.length > 3) {
        // fix show alert boostrap
        alert("Se pueden adjuntar hasta 3 archivos ");
      }
      let cantFaltante = 3 - this.caracteristica.files.length;
      for (let i = 0; i < cantFaltante; i++) {
        var reader = new FileReader();
        var file = this.$refs.fileUpload.files[i];
        const fileReader = new FileReader();
        const getResult = new Promise(resolve => {
            fileReader.onload = e => {
              this.caracteristica.files.push({
                name  : this.$refs.fileUpload.files[i].name,
                size  : this.$refs.fileUpload.files[i].size,
                type  : this.$refs.fileUpload.files[i].type,
                image : e.target.result
              });
            };
          });

          fileReader.readAsDataURL(file);
          return getResult.then(file => {
            return file;
          });
      }
    },
    removeItem (image ) {

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
