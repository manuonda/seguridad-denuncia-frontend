<template>
  <div id="denunciante">
    <!-- NOMBRE -->
    <div class="form-group"><label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Ingrese Nombre"
        v-model="denunciado.nombre">
    </div>

    <div class="form-group">
      <label for="apellido"> Apellido </label>
      <input type="text" class="form-control" placeholder="Ingrese Apellido" id="apellido"
        name="apellido"
        v-model="denunciado.apellido">
    </div>

    <div class="form-group">
     <label for="apodo"> Apodo</label>
     <input type="text" class="form-control" placeholder="Ingrese Apodo"
       v-model="denunciado.apodo">
    </div>

    <fieldset class="form-group">
      <label> Género </label>
      <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" value="femenino" v-model="denunciado.genero" >
               Femenino
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" value="masculino" v-model="denunciado.genero">
          Masculino
        </label>
      </div>
    </fieldset>

    <strong>DOMICILIO DEL DENUNCIADO</strong>
     <hr>
      <!-- calle -->
     <div class="form-group">
      <label for="calle"> Calle</label>
      <input type="text" class="form-control" name="calle" id="calle" v-model="denunciado.calle" placeholder="Ejemplo : Calle la angostura">
      </div>


      <div class="row">
      <!-- numero -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Número</label>
      <input type="text" class="form-control" name="numero" id="numero" v-model="denunciado.numero">
      </div>
      </div>
      <!-- piso -->
      <div class="col">
      <div class="form-group">
      <label for="numero">Piso</label>
      <input type="text" class="form-control" name="piso" id="piso" v-model="denunciado.piso"/>
      </div>
      </div>
      <!-- puerta -->
      <div class="col">
      <div class="form-group">
      <label for="puerta">Puerta</label>
      <input type="text" class="form-control" name="puerta" id="puerta" v-model="denunciado.puerta"/>
      </div>
      </div>
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
import Vue from "vue";
import { en, es } from "vuejs-datepicker/dist/locale";
import DatePicker from "vuejs-datepicker";
import SimpleVueValidator from "simple-vue-validator";

const Validator = SimpleVueValidator.Validator;

export default {
  props: {
    denunciado: Object
  },
  components: {
    DatePicker
  },
  validators: {

  },
  data() {
    return {
      es: es,
      date: "",
      submitted: false,
      format: "dd MMM yyyy",
      options: {
        format: "DD/MM/YYYY",
        useCurrent: false
      },
      step: 1
    };
  },
  methods: {
    anterior() {
      this.$emit('decrement-step');
    },
    siguiente() {
       this.$emit('increment-step');
    },
    cambiaToDenunciaAnonima() {
      this.denunciante.anonimo = 'SI';
      this.$scrollTo('#actions','body', 2000)
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
     this.$scrollTo('#denunciante', 'body', 2000);
  }
};
</script>
<style>
.warning {
  background-color: #f2e18c;
  border-radius: 6px;
  line-height: 30px;
  padding: 5px;
}

p {
  margin: 0 0 10px;
}

.header-toc {
  background-color: #1955a6;
  height: 2.5em;
  font-size: 1em;
  font-family: "dinBold";
  color: white;
  padding: 10px;
  margin-bottom: 20px;
}

.form-cancel-button {
  float: left;
}

.form-right-button {
  float: right;
}
</style>
