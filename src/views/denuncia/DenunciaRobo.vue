<template>
  <div>
    <!--<div id="subheader" class="subheader"><span>RUBO / HORTO </span></div>
    -->
    <sub-header title="ROBO / HURTO"></sub-header>
    <div class="layout-container has-subheader">
      <div class="form-layout">
        <form @submit.prevent="validateForm()" >
          <fieldset>
            {{ submitted }}
            <div class="form-group">
              <label for="nombre">
                <strong>Nombre *</strong>
              </label>
              <input type="text"
                  id="nombre"
                  name="nombre"
                  class="form-control"
                  placeholder="Ingrese Nombre"
                  v-model="model.nombre"
                  v-validate="'required'"
                  v-bind:class="{ 'is-invalid': submitted && errors.has('nombre') }"
                  />
              <div v-if="submitted && errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</div>
            </div>
            <div class="form-group">
              <label for="apellido">
                <strong>Apellido *</strong>
              </label>
              <input type="text" class="form-control" placeholder="Ingrese Apellido"
                 id="apellido"
                 name="apellido"
                 v-model="model.apellido"
                 v-validate="'required'"
                 v-bind:class="{'is-invalid':submitted && errors.has('apellido')}">
              <div v-if="submitted && errors.has('apellido')" class="text-danger"> {{ errors.first('apellido')}}</div>
            </div>

            <div class="form-group">
              <label for="exampleSelect1">
                <strong>Tipo Documento *</strong>
              </label>
              <select class="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="numero_documento">
                <strong>Número de Documento *</strong>
              </label>
              <input type="text" id="numero_documento" class="form-control">
            </div>

            <div class="form-group">
              <label>
                <strong>Fecha Nacimiento *</strong>
              </label>
<datepicker  :date="date" :format="format"  :language="es"></datepicker>            </div>

            <fieldset class="form-group">
              <label>
                <strong>Género *</strong>
              </label>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                  >
                  Femenino
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  >
                  Masculino
                </label>
              </div>
            </fieldset>

            <strong>DATOS DE CONTACTO</strong>
            <hr>
            <div class="form-group"></div>
            <fieldset class="form-group">
              <legend>Checkboxes</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value checked>
                  Option one is this and that—be sure to include why it's great
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value disabled>
                  Option two is disabled
                </label>
              </div>
            </fieldset>
            <button type="button" class="btn btn-primary" @click="cancelar()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Siguiente</button>
          </fieldset>
        </form>
      </div>
    </div>

    <!-- modal -->
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
import SubHeader from "../../components/SubHeader";
import {en, es} from 'vuejs-datepicker/dist/locale';
import Datepicker from "vuejs-datepicker";


export default {
  components: {
    SubHeader: SubHeader,
    Datepicker
  },
  data() {
    return {
      en: en,
      es: es,
      date: new Date(),
      submitted : false,
      format: "dd MMM yyyy",
      model : {
        nombre : '',
        apellido: ''
      }
    };
  },
  methods: {
    cancelar() {
      alert("Canclear");
    },
     validateForm(scope){
       console.log(this.$validator);
       console.log("has nombre : ",this.$validator.errors.has('nombre'));
       this.$validator.validateAll(scope)
       .then( (result) => {
         console.log( result );
          if( result ) {
             alert(result);
          }else {
            this.submitted = true;
          }
       })
     }
  },
  created() {
    console.log(" created");
  }
};
</script>
<style>
</style>
