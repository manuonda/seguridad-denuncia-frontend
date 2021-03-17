<template>
  <div>
    <!--<div id="subheader" class="subheader"><span>RUBO / HORTO </span></div>
      <sub-header title="ROBO / HURTO"></sub-header>
    -->
    <div class="layout-container has-subheader">
      <div class="form-layout wizard">
        <!-- slider -->
        <slider :step="step"></slider>

        <form  style="display: block;margin-top: 0em;">


        <fieldset v-if="step == 1">
              <localizacion-hecho  v-bind:localizacion="localizacion"
                                   @decrement-step="decrementStep"
                                   @increment-step="incrementStep"
                                  @finalizar-denuncia="finalizarDenuncia">
              </localizacion-hecho>
          </fieldset>
          <fieldset v-if="step === 2">
            <hecho
                              v-bind:hecho="hecho"
                              @decrement-step="decrementStep"
                              @increment-step="incrementStep"
                              @finalizar-denuncia="finalizarDenuncia">
          </hecho>


          </fieldset>
             <fieldset v-if="step === 3  ">
             <datos-denunciado
                              v-bind:denunciado="denunciado"
                              @increment-step="incrementStep"
                              @decrement-step="decrementStep"
                              @finalizar-denuncia="finalizarDenuncia">
             </datos-denunciado>
           </fieldset>
           <fieldset v-if="step === 4 ">
             <datos-denunciante
                              v-bind:denunciante="denunciante"
                              @increment-step="incrementStep"
                              @decrement-step="decrementStep"
                              @finalizar-denuncia="finalizarDenuncia">
            </datos-denunciante>
           </fieldset>

           <fieldset v-if="step === 5 ">

             <resumen-hecho       v-bind:denunciante="denunciante"
                                  v-bind:denunciado="denunciado"
                                  v-bind:localizacion="localizacion"
                                  v-bind:hecho="hecho"
                                  @decrement-step="decrementStep"
                                  @finalizar-denuncia="finalizarDenuncia">
            </resumen-hecho>

           </fieldset>


             <fieldset v-if="step === 6 ">

              <finalizado v-bind:seguimiento="seguimiento"
                          @inicio-denuncia="inicio">
              </finalizado>
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
import Hecho from '../../components/denuncia/Hecho.vue';
import ResumenHecho from '../../components/denuncia/ResumenHecho.vue';
import Finalizado from '../../components/denuncia/Finalizado.vue';


// Impor recaptcha
import Vue from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);


export default {
  components: {
    SubHeader: SubHeader,
    DatosDenunciante: DatosDenunciante,
    LocalizacionHecho : LocalizacionHecho,
    Hecho : Hecho,
    ResumenHecho :  ResumenHecho,
    DatosDenunciado : DatosDenunciado ,
    Finalizado : Finalizado,
    Slider : Slider
  },
  data() {
    return {
      date: new Date(),
      submitted : false,
      format: "dd MMM yyyy",
      src : "",
      disabled: '',
      enviado : false,
      fullPage: false,
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
      } ,
      step: 1,
      denuncia : {
          tipo: '',
         from : '',
         plataforma: 'WEB',
         date : '',
         time  : ''
      },
      denunciante : {
        anonimo:'NO',
        nombre : '',
        apellido: '',
        tipoDocumento : '',
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
        detalle: '',
        barrio: '',
        localidad: '',
      },
      hecho : {
        tipoDenuncia: '',
        descripcion: '',
        files : []
      },
      seguimiento : ''
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
    inicio () {
       console.log("inicio");
       this.$router.push('/');
    },
    finalizarDenuncia(){

      console.log("finalizar denuncias");
      var date = new Date();
      var time = new Date().getTimezoneOffset();
      let form = new FormData();
      this.enviado = true;

      let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer
      });

      form.append("denunciaPlataforma" , this.denuncia.plataforma);

      // denunciante
      form.append("denuncianteAnonimo",           this.denunciante.anonimo );
      form.append("denuncianteNombre",            this.denunciante.nombre );
      form.append("denuncianteApellido",          this.denunciante.numeroDocumento );
      form.append("denuncianteNumeroDocumento",   this.denunciante.numeroDocumento );
      form.append("denuncianteCodigoArea",        this.denunciante.codigoArea );
      form.append("denuncianteNumeroTelefono",    this.denunciante.numeroTelefono );
      form.append("denuncianteCorreoElectronico", this.denunciante.correoElectronico);
      // denunciado
      form.append("denunciadoNombre",    this.denunciado.nombre );
      form.append("denunciadoApellido",  this.denunciado.apellido );
      form.append("denunciadoApodo",     this.denunciado.apodo );
      form.append("denunciadoGenero",    this.denunciado.genero );
      form.append("denunciadoCalle",     this.denunciado.calle );
      form.append("denunciadoNumero",    this.denunciado.numero );
      form.append("denunciadoPiso",      this.denunciado.piso );
      form.append("denunciadoPuerta",    this.denunciado.puerta );
      // localizacion
      form.append("localizacionLatitud" , this.localizacion.latitud );
      form.append("localizacionLongitud", this.localizacion.longitud );
      form.append("localizacionCalle",    this.localizacion.calle );
      form.append("localizacionNumero",   this.localizacion.numero );
      form.append("localizacionPiso",     this.localizacion.piso );
      form.append("localizacionPuerta",   this.localizacion.puerta );
      form.append("localizacionDetalle",  this.localizacion.detalle );
      form.append("localizacionBarrio",   this.localizacion.barrio);
      form.append("localizacionLocalidad",this.localizacion.localidad);

      //  hecho
      form.append("hechoDescripcion" , this.hecho.descripcion );
      form.append("tipoDenuncia", this.hecho.tipoDenuncia);
      if ( this.hecho.files != null  && this.hecho.files.length > 0 ){
           this.hecho.files.forEach( (elemento, index ) => {
          form.append('files[]', elemento.file );
        });
      }

      const data = {
         denuncia     : this.denuncia,
         denunciante  : this.denunciante,
         denunciado   : this.denunciado,
         hecho        : this.hecho,
         localizacion : this.localizacion
      }

       this.enviado = true;
       //axios.post('http://192.168.0.89:4000/vecino/add', form,   // oficina database
        axios.post('http://52.204.55.170:4000/vecino/add', form,  // produccion
        //axios.post('http://localhost:4000/vecino/add', form,       //local apunt a produccion
        { headers: {
         'content-type': 'application/x-www-form-urlencoded'
         }
        }).then ( (result ) =>{
          if( result != null && result.status == '200' && result.data.status =='OK'){
               console.log('resultado ', result );
               this.step = 6 ;
               this.disableAll = true ;
               this.seguimiento = result.data.seguimiento;
               loader.hide()
          } else {
              this.step = 6 ;
              this.disableAll = true;
              this.seguimiento = "Se produjo un error al realizar la denuncia";
              loader.hide()
          }
      })
      .catch( error => {
         console.log( error );
         this.step = 6 ;
         if ( error.response != null && error.response.status == 429) {
           this.seguimiento = error.response.data;
         } else {
           this.seguimiento = "Se produjo un error al realizar la denuncia";
         }
          loader.hide()

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
