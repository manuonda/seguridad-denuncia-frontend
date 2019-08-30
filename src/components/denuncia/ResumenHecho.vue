<template>
  <div class="form-resume">
        <p class="resume-header">LOCALIZACION DEL HECHO</p>
         <div class="form-group">
           <label>Calle</label>
             <p>{{localizacion.calle}} </p>
         </div>

      <div class="row">
      <!-- numero -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Número</label>
        <p v-if="localizacion.numero != ''"> {{ localizacion.numero}}</p>
        <p v-if="localizacion.numero == ''"> Sin especificar</p>
      </div>
      </div>
      <!-- piso -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Piso</label>
      <p v-if="localizacion.piso != ''"> {{ localizacion.piso}}</p>
      <p v-if="localizacion.piso == ''"> Sin especificar</p>
      </div>
      </div>
      <!-- puerta -->
      <div class="col">
      <div class="form-group">
      <label for="puerta">Puerta</label>
      <p v-if="localizacion.puerta != ''"> {{ localizacion.puerta }}</p>
      <p v-if="localizacion.puerta == ''"> Sin especificar</p>
      </div>
      </div>
      </div>
      <div class="form-group">
      <label>Detalle de la ubicación</label>
      <p v-if="localizacion.detalle != ''"> {{localizacion.detalle }}</p>
      <p v-if="localizacion.detalle == ''"> Sin especificar </p>
      </div>
      <p class="resume-header">HECHO</p>
      <div class="form-group">
      <label>Descripción del hecho *</label>
       <pre class="form-control-static">{{hecho.descripcion}}
       </pre>
      </div>
      <div v-if="hecho.files.length > 0" class="resume-images">
          <div v-for="item in hecho.files" class="file-upload-resume">
            <p> {{ item.name}}</p>
          <img   :src="item.image" style="width: 320px;">
          </div>
      </div>

     <p class="resume-header">DATOS DEL DENUNCIADO</p>
    <div class="row">
      <div class="col">
     <div class="form-group">
     <label>Nombre</label>
     <p v-if="denunciado.nombre != ''"> {{denunciado.nombre}}</p>
     <p v-if="denunciado.nombre == ''"> Sin especificar </p>
     </div>
      </div>

     <div class="col">
    <div class="form-group">
     <label> Apellido</label>
     <p v-if="denunciado.apellido != ''"> {{denunciado.apellido}}</p>
     <p v-if="denunciado.apellido == ''"> Sin especificar </p>
    </div>
     </div>

     <div class="col">
    <div class="form-group">
     <label>Apodo</label>
     <p v-if="denunciado.apodo != ''"> {{denunciado.apodo}}</p>
     <p v-if="denunciado.apodo == ''"> Sin especificar </p>
    </div>
     </div>
    </div>
     <div class="form-group">
     <label>Genero</label>
     <p v-if="denunciado.genero != ''"> {{denunciado.genero}}</p>
     <p v-if="denunciado.genero == ''"> Sin especificar </p>
     </div>

     <p class="resume-header">DOMICILIO DEL DENUNCIADO</p>
      <div class="form-group">
           <label>Calle</label>
             <p>{{denunciado.calle}} </p>
         </div>

      <div class="row">
      <!-- numero -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Número</label>
        <p v-if="denunciado.numero != ''"> {{ denunciado.numero}}</p>
        <p v-if="denunciado.numero == ''"> Sin especificar</p>
      </div>
      </div>
      <!-- piso -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Piso</label>
      <p v-if="denunciado.piso != ''"> {{ denunciado.piso}}</p>
      <p v-if="denunciado.piso == ''"> Sin especificar</p>
      </div>
      </div>
      <!-- puerta -->
      <div class="col">
      <div class="form-group">
      <label for="puerta">Puerta</label>
      <p v-if="denunciado.puerta != ''"> {{ denunciado.puerta }}</p>
      <p v-if="denunciado.puerta == ''"> Sin especificar</p>
      </div>
      </div>
      </div>

    <p class="resume-header">DATOS DEL DENUNCIANTE</p>
    <div v-show="denunciante.anonimo == 'SI'">
      <label>
      <strong>¿Desea hacer la denuncia de forma anónima? *</strong>
       <p> Si </p>
      </label>
    </div>

    <div v-show="denunciante.anonimo == 'NO'">
      <div class="row">
      <div class="col">
     <div class="form-group">
     <label>Nombre</label>
     <p v-if="denunciante.nombre != ''"> {{denunciante.nombre}}</p>
     </div>
      </div>

     <div class="col">
    <div class="form-group">
     <label> Apellido</label>
     <p v-if="denunciante.apellido != ''">  {{ denunciante.apellido}} </p>
    </div>
     </div>

     <div class="col">
    <div class="form-group">
     <label>Tipo Documento</label>
     <p v-if="denunciante.tipoDocumento != ''"> {{denunciante.tipoDocumento}}</p>
    </div>
     </div>
    </div>
     <div class="form-group">
      <label> Numero de Documento</label>
      <p> {{ denunciante.numeroDocumento}}</p>
     </div>

    <p class="resume-header">DATOS DE CONTACTO DEL DENUNCIANTE</p>

    </div>



     <br>
     <hr>
    <div id="actions">
    <div class="form-cancel-button">
      <button type="button" class="btn btn-primary" @click="anterior">Anterior</button>
      <button type="button" class="btn btn-primary" @click="cancelar">Cancelar</button>
    </div>

    <div class="form-right-button">
         <!-- <vue-recaptcha sitekey="6LevP7MUAAAAAOVsPOl2vGe1zT8YjnrHaBgqlo8h"> -->
        <button type="button" class="btn btn-primary" @click="finalizar">Finalizar</button>
          <!--
          </vue-recaptcha>
          -->
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
  import VueRecaptcha from 'vue-recaptcha';

export default {
  components : {VueRecaptcha},
  props :{
    denunciante    : Object,
    denunciado     : Object,
    localizacion   : Object,
    hecho : Object
  },
  data() {
    return {

    };
  },
  methods: {
    anterior(){
        this.$emit('decrement-step')
    },
    finalizar() {
        this.$emit('finalizar-denuncia')
    },
    cancelar() {
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
  }
}
</script>
<style>
.form-resume .anonymous-warn {
    display: none;
}

.form-resume p, .form-resume pre {
    padding-top: 0px;
    color: #AAA;
    max-width: 90vw;
}
.form-resume p, .form-resume pre {
    padding-top: 0px;
    color: #AAA;
    max-width: 90vw;
}

.form-control-static {
    min-height: 34px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 0;
}
pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.resume-images {
  display: flex;
  box-sizing: border-box;
}

file-upload-resume {
    margin: 0px 20px 20px 0px;
}
</style>
