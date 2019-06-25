<template>
  <div>
    <div class="form-group">
            <label for="nombre">
                <strong>Nombre *</strong>
              </label>
              <input type="text"
                  id="nombre"
                  name="nombre"
                  class="form-control"
                  placeholder="Ingrese Nombre"
                  v-model="denunciante.nombre"
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
                 v-model="denunciante.apellido"
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
              <input type="text"
                class="form-control"
                name="numeroDocumento"
                id = "numeroDocumento"
                v-validate = "'required'"
                v-model = "denunciante.numeroDocumento"
                v-bind:class="{'is-invalid' : submitted && errors.has('numeroDocumento')}">
                <div v-if="submitted && errors.has('numeroDocumento')" class="text-danger">{{errors.first('numeroDocumento')}}</div>
            </div>

            <div class="form-group">
              <label>
                <strong>Fecha Nacimiento *</strong>
              </label>
              <!--
              <datepicker v-bind:language="es"
                          v-bind:input-class="{'datepicker-input-reg': true, 'is-invalid-input': errors.has('event_date')}"
                          v-model="denunciante.fechaNacimiento"
                          v-bind:v-validate="{required: true, date_format: 'YYYY-MM-DD'}"
                          name="fechaNacimiento"
                          id="fechaNacimiento"></datepicker>
              <span class="form-error" :class="{'is-visible': errors.has('fechaNacimiento')}">
                {{ errors.first('fechaNacimiento') }}
              </span>
              -->
              <date-picker v-model="date" :config="options" :language="es"></date-picker>



              </div>

            <fieldset class="form-group">
              <label>
                <strong>Género *</strong>
              </label>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="genero"
                    id="genero"
                    value="femenino"
                    v-model="denunciante.genero"

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

            <strong>DATOS DE CONTACTO(Ingrese al menos una via de contacto)</strong>
            <hr>
            <div class="form-group">
             <label>Telefono </label>
             <div class="row">
              <div class="col-md-3">
             <input type="text"
                class="form-control"
                name="codigoArea"
                id = "codigoArea"
                v-model = "denunciante.codigoArea"
                v-bind:class="{'is-invalid' : submitted && errors.has('codigoArea')}">
             </div>
              <div class="col-md-6">
             <input type="text"
                class="form-control"
                name="numeroTelefono"
                v-model = "denunciante.numeroTelefono">
             </div>
            </div>

            <div class="form-group">
            <label for="email">Correo electronico</label>
            <input type="text"
                   class="form-control"
                   name="correoElectronico"
                   v-model="denunciante.correoElectronico">
            </div>
            </div>
</div>
</template>
<script>

import Vue from "vue"
import {en, es} from 'vuejs-datepicker/dist/locale';
import DatePicker from "vuejs-datepicker"
import SimpleVueValidator from "simple-vue-validator";


const Validator = SimpleVueValidator.Validator


export default {
  props: {
     denunciante: Object
  },
  components : {
    DatePicker
  },
  validators : {
      'denunciante.nombre' : function (value ) {
      return Validator.value(value).required();
    },
      'denunciante.apellido' : function( value ) {
      return Validator.value(value).required();
    }
  },
  data(){
   return {
      es : es ,
      date:  "" ,
      submitted : false,
      format: "dd MMM yyyy",
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
      } ,
      step: 1
   }
  },
  created(){
    console.log("created datos denunciante ");
    console.log(this.denunciante);
  }

}
</script>
<style>

</style>
