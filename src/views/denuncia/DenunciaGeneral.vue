<template>
  <div>
    <!--<div id="subheader" class="subheader"><span>RUBO / HORTO </span></div>
    -->
    <sub-header title="ROBO / HURTO"></sub-header>
    <div class="layout-container has-subheader">
      <div class="form-layout wizard">
        <slider></slider>
        <form  style="display: block;margin-top: 0em;">
        <fieldset v-if="step == 1">
              <localizacion-hecho  v-bind:localizacion="localizacion"
                                   @decrement-step="decrementStep"
                                   @increment-step="incrementStep">
              </localizacion-hecho>
          </fieldset>
          <fieldset v-if="step === 2">
            <caracteristica-hecho
                              v-bind:caracteristica="caracteristica"
                              @decrement-step="decrementStep"
                              @increment-step="incrementStep">
          </caracteristica-hecho>


          </fieldset>
             <fieldset v-if="step === 3  ">
             <datos-denunciado
                              v-bind:denunciado="denunciado"
                              @increment-step="incrementStep"
                              @decrement-step="decrementStep">
             </datos-denunciado>
           </fieldset>
           <fieldset v-if="step === 4 ">
             <datos-denunciante
                              v-bind:denunciante="denunciante"
                              @increment-step="incrementStep"
                              @decrement-step="decrementStep">
            </datos-denunciante>
           </fieldset>

           <fieldset v-if="step === 5 ">
             <resumen-hecho       v-bind:denunciante="denunciante"
                                  v-bind:denunciado="denunciado"
                                  v-bind:localizacion="localizacion"
                                  v-bind:caracteristica="caracteristica"
                                  @decrement-step="decrementStep"
                                  @finalizar-denuncia="finalizarDenuncia">
            </resumen-hecho>
          </fieldset>

        </form>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

import SubHeader from "../../components/SubHeader";
import Slider    from "../../components/Slide";
import DatosDenuncia from './../../components/denuncia/DatosDenunciante';
import DatosDenunciado  from './../../components/denuncia/DatosDenunciado';
import DatosDenunciante from '../../components/denuncia/DatosDenunciante.vue';
import LocalizacionHecho from '../../components/denuncia/LocalizacionHecho.vue';
import CaracteristicaHecho from '../../components/denuncia/CaracteristicaHecho';
import ResumenHecho from '../../components/denuncia/ResumenHecho';


export default {
  components: {
    SubHeader: SubHeader,
    DatosDenunciante: DatosDenunciante,
    LocalizacionHecho : LocalizacionHecho,
    CaracteristicaHecho : CaracteristicaHecho,
    ResumenHecho :  ResumenHecho,
    DatosDenunciado : DatosDenunciado ,
    Slider : Slider
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
      denuncia : {
         tipo: '',
         from : '',
         date : '',
         time  : ''
      },
      denunciante : {
        anonimo:'NO',
        nombre : '',
        apellido: '',
        numeroDocumento:'',
        fechaNacimiento : '',
        codigoArea : '',
        numeroTelefono: '',
        correoElectronico: '',
        genero:''
      },
      denunciado : {
        nombre: '',
        apellido : '',
        apodo : '',
        genero: '',
        calle : '',
        numero : '',
        piso   : '' ,
        puerta : ''
      },
      localizacion : {
        fechaHecho : '',
        latitud : 0,
        longitud : 0,
        calle:'',
        numero:'',
        piso : '',
        puerta : '',
        detalle: ''
      },
      caracteristica : {
        descripcion: '',
        files : []

      }
    };
  },
  methods: {
    cancelar() {
      alert("Canclear");
    },
    incrementStep(){
      console.log( " step : "+this.step);
      this.step +=1;

    },
    decrementStep() {
      if ( this.step > 0 ){
        this.step -=1;
      }
    },
    finalizarDenuncia(){
      let form = new FormData();
      axios.post( '' , formData ).then ( (result ) =>{

      })
      .catch( error => {

      });
    }
  },
  created() {
    this.denuncia.tipo = 'GENERAL';
    this.denuncia.plataforma = 'WEB';
    var dateNow = new Date();
    this.denuncia.date = dateNow.getDate() + "/"+dateNow.getMonth() + "/" + dateNow.getFullYear();
    this.denuncia.time = "";
  }
};
</script>
<style>

</style>
