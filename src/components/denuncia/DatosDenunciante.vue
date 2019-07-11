<template>
  <div id="denunciante">

     <fieldset class="form-group">
     <label>
     <strong>¿Desea hacer la denuncia de forma anónima? *</strong>
     </label>
     <div class="form-check">
     <label class="form-check-label">
     <input type="radio" class="form-check-input" name="anonimato" value="SI" v-model="denunciante.anonimo"
             v-on:change="cambiaToDenunciaAnonima" > Si
     </label>
     </div>
     <div class="form-check">
     <label class="form-check-label">
     <input type="radio" class="form-check-input" name="anonima"  value="NO" v-model="denunciante.anonimo"> No
     </label>
     </div>
     </fieldset>

    <!-- NOMBRE -->
    <div class="form-group">
    <label for="nombre">
       <div v-if="denunciante.anonimo == 'SI'">Nombre</div>
       <div v-if="denunciante.anonimo == 'NO'"> Nombre *</div>
    </label>
    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Ingrese Nombre"
        v-model="denunciante.nombre"
        :disabled="denunciante.anonimo == 'SI'"
        v-bind:class="{'is-invalid': denunciante.anonimo == 'NO' && validation.hasError('denunciante.nombre')}">
     <div v-if="denunciante.anonimo =='NO' && submitted && validation.hasError('denunciante.nombre')"
        class="text-danger">
     {{ validation.firstError('denunciante.nombre') }}</div>
    </div>

    <div class="form-group">
      <label for="apellido">
        <div v-if="denunciante.anonimo=='SI'">Apellido</div>
        <div v-if="denunciante.anonimo =='NO'">Apellido *</div>
      </label>
      <input type="text" class="form-control" placeholder="Ingrese Apellido" id="apellido"
        name="apellido"
        v-model="denunciante.apellido"
        v-bind:disabled="denunciante.anonimo == 'SI'"
        v-bind:class="{'is-invalid': denunciante.anonimo=='NO' && submitted && validation.hasError('denunciante.apellido')}">
      <div v-if="denunciante.anonimo == 'NO' && submitted && validation.hasError('denunciante.apellido')" class="text-danger">
        {{ validation.firstError('denunciante.apellido')}}
      </div>
    </div>

    <div class="form-group">
      <label for="tipoDocumento">
        <div v-if="denunciante.anonimo=='SI'">Tipo Documento</div>
        <div v-if="denunciante.anonimo =='NO'">Tipo Documento *</div>
      </label>
      <select class="form-control" id="exampleSelect1" v-bind:disabled="denunciante.anonimo == 'SI'"
              v-model="denunciante.tipoDocumento"
              v-bind:class="{'is-invalid' : denunciante.anonimo == 'NO' && validation.hasError('denunciante.tipoDocumento')}">
        <option value="DNI">DNI</option>
        <option value="LC">LC</option>
        <option value="LE">LE</option>
      </select>
    </div>
    <!-- numero de documento -->
    <div class="form-group">
      <label for="numero_documento">
        <div v-if="denunciante.anonimo == 'SI'">Número de Documento</div>
        <div v-if="denunciante.anonimo == 'NO'">Número de Documento *</div>
      </label>
      <input type="text" class="form-control" name="numeroDocumento" id="numeroDocumento"
        v-model="denunciante.numeroDocumento"
        v-bind:disabled=" denunciante.anonimo == 'SI'"
        v-bind:class="{'is-invalid' : denunciante.anonimo =='NO'  && validation.hasError('denunciante.numeroDocumento')}">
      <div v-if="denunciante.anonimo=='NO' && validation.hasError('denunciante.numeroDocumento')" class="text-danger">
         {{validation.firstError('denunciante.numeroDocumento')}}</div>
    </div>

    <!--
    <div class="form-group">
      <label for="fechaNacimiento">
       <div v-if="denunciante.anonimo=='SI'">Fecha Nacimiento</div>
       <div v-if="denunciante.anonimo=='NO'">Fecha Nacimiento *</div>
      </label>
       <date-picker v-model="denunciante.fechaNacimiento" :config="options" :language="es"
          v-bind:disabled="denunciante.anonimo == 'SI'"
          v-bind:class="{'is-invalid' : denunciante.anonimo == 'NO' && validation.hasError('denunciante.fechaNacimiento')}"
       ></date-picker>
       <div v-if="denunciante.anonimo == 'NO'&& validation.hasError('denunciante.fechaNacimiento')" class="text-danger">
         {{validation.firstError('denunciante.fechaNacimiento')}}</div>
    </div>


    <fieldset class="form-group">
      <label>
      <div v-if="denunciante.anonimo=='SI'">Género</div>
      <div v-if="denunciante.anonimo=='NO'">Género *</div>
      </label>
      <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" value="femenino" v-model="denunciante.genero"
               v-bind:disabled="denunciante.anonimo=='SI'" v-bind:class="{'is-invalid': denunciante.anonimo == 'NO'}" >
               Femenino
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" value="masculino" v-model="denunciante.genero" v-bind:disabled="denunciante.anonimo== 'SI'">
          Masculino
        </label>
      </div>
       <div v-if="denunciante.anonimo == 'NO'&& validation.hasError('denunciante.genero')" class="text-danger">
         {{validation.firstError('denunciante.genero')}}</div>
    </fieldset>
     -->
    <strong>DATOS DE CONTACTO</strong>
    <hr>
    <div class="form-group">
      <label>Telefono</label>
      <div class="row">
        <div class="col-md-3">
        <input type="text" class="form-control" name="codigoArea" id="codigoArea" v-model="denunciante.codigoArea"
          placeholder="Ej : 388"
         >
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" name="numeroTelefono" v-model="denunciante.numeroTelefono"
           placeholder="Ej: 154589546"
          >
        </div>
      </div>

      <div class="form-group">
        <label for="email">Correo electronico</label>
        <input  type="text" class="form-control" name="correoElectronico" v-model="denunciante.correoElectronico"
         placeholder="Ej : seguridad@gmail.com"
        >
      </div>
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
import Vue from "vue";
import { en, es } from "vuejs-datepicker/dist/locale";
import DatePicker from "vuejs-datepicker";
import SimpleVueValidator from "simple-vue-validator";

const Validator = SimpleVueValidator.Validator;

export default {
  props: {
    denunciante: Object
  },
  components: {
    DatePicker
  },
  validators: {
    "denunciante.nombre": function(value) {
      return Validator.custom(function() {
        if (Validator.isEmpty(value)) {
          return "Debe Ingresar Nombre";
        }
      });
    },
    "denunciante.apellido": function(value) {
      return Validator.custom(function() {
        if (Validator.isEmpty(value)) {
          return "Debe Ingresar Apelllido";
        }
      });
    },
    "denunciante.numeroDocumento" : function(value){
      return Validator.value(value).required().regex('^[0-9]', 'Debe contener solamente valor numericos.');

    }

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
    anterior () {
      this.$emit('decrement-step');
    },
    siguiente() {
      this.submitted = true;
      if ( this.denunciante.anonimo == 'NO') {
          this.$validate().then( success => {
          if ( success ) {
               this.$emit('increment-step');
          }
        })
      } else { // incrementa el paso
        this.$emit('increment-step');
      }

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
