<template>
  <div>
    <!--<div id="subheader" class="subheader"><span>RUBO / HORTO </span></div>
    -->
    <sub-header title="ROBO / HURTO"></sub-header>
    <div class="layout-container has-subheader">
      <div class="form-layout wizard">
       <div class="steps clearfix">
       <ul role="tablist">
       <li role="tab" class="first done" aria-disabled="false" aria-selected="false">
       <a id="wizard1-t-0" href="#wizard1-h-0" aria-controls="wizard1-p-0">
       <span class="number">1</span> <span class="title">Personal Information</span></a></li>
       <li role="tab" class="done" aria-disabled="false" aria-selected="false">
       <a id="wizard1-t-1" href="#wizard1-h-1" aria-controls="wizard1-p-1"><span class="number">2</span>
       <span class="title">Billing Information</span></a></li>
       <li role="tab" class="last current" aria-disabled="false" aria-selected="true">
       <a id="wizard1-t-2" href="#wizard1-h-2" aria-controls="wizard1-p-2">
       <span class="current-info audible">current step: </span><span class="number">3</span>
       <span class="title">Payment Details</span></a></li></ul>
        </div>

        <form>
          {{ submitted }}
            Nombre{{ denunciante.nombre }}
            <br>Apellido{{ denunciante.apellido}}

        <fieldset v-if="step == 1">
            <datos-denunciante v-bind:denunciante="denunciante"></datos-denunciante>
          </fieldset>
          <fieldset v-if="step === 2">
               <localizacion-hecho v-bind:localizacion="localizacion"></localizacion-hecho>
               <button type="button" class="btn btn-primary" @click="cancelar()">Cancelar</button>
               <button type="submit" class="btn btn-primary" @click="goNext()">Siguiente</button>
          </fieldset>
          <fieldset v-if="step === 3 ">
            <caracteristica-hecho></caracteristica-hecho>
          </fieldset>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
import SubHeader from "../../components/SubHeader";
import DatosDenuncia from './../../components/denuncia/DatosDenunciante';
import DatosDenunciante from '../../components/denuncia/DatosDenunciante.vue';
import LocalizacionHecho from '../../components/denuncia/LocalizacionHecho.vue';
import CaracteristicaHecho from '../../components/denuncia/CaracteristicaHecho';


export default {
  components: {
    SubHeader: SubHeader,
    DatosDenunciante: DatosDenunciante,
    LocalizacionHecho : LocalizacionHecho,
    CaracteristicaHecho : CaracteristicaHecho
  },
  data() {
    return {
      date: new Date(),
      submitted : false,
      format: "dd MMM yyyy",
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
      } ,
      step: 1,
      denunciante : {
        anonimo:'NO',
        nombre : '',
        apellido: '',
        numeroDocumento:'',
        fechaNacimiento : '',
        codigoArea : '',
        numeroTelefono: '',
        correoElectronico: ''

      },
      localizacion : {
        fechaHecho : '',
        latitud : 0,
        longitud : 0
      }
    };
  },
  methods: {
    cancelar() {
      alert("Canclear");
    },
    goNext(){
      this.step +=1;
      console.log(this.step);
      alert(this.step);
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
