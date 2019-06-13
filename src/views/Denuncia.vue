<template>
  <div>
    <div class="bs-docs-section">
      <div class="row">
        <div class="col-lg-12">
          <div class="bs-component">
            <div class="jumbotron">
              <h1
                class="text-center text-dinBold"
              >Ahora podés informar hechos delictivos sin ir a la comisaría</h1>
              <hr class="my-4">
              <p
                class="text-center text-din h5"
              >Si presenciaste o fuiste víctima de un robo, corrupción policial, venta de drogas, violencia familiar o de género, delito contra la integridad sexual, tenés conocimiento sobre actividades de juego ilegal o sobre comercio ilegal de autopartes, no lo dudes. Las denuncias de corrupción policial, narcotráfico, juego ilegal y comercio ilegal de autopartes, se pueden hacer de forma anónima.</p>
              <br>
              <br>
              <br>
              <p class="lead text-center">
                <button
                  class="btn btn-primary-denuncia btn-lg text-din btn-rounded"
                  role="button"
                  v-scroll-to="'#denuncias'"
                >
                  <span>
                    <strong>DENUNCIÁ</strong>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tipo de denuncias -->
    <div id="denuncias" class="secundario">
       <div class="row">
        <div v-for=" denuncia in denuncias">
           {{denuncia.texto}}
          <denuncia-card
                  v-bind:texto="denuncia.texto"
                  v-bind:img="{'background-image': 'url(' + require('../assets/categorias/robo-wide.jpg') + ')'}">
          </denuncia-card>
        </div>
        </div>
    </div>
    <!-- end tipo de denuncias -->


  </div>
</template>
<script>
import DenunciaCard from "../components/denuncia/card.vue";

export default {
  components: {
    DenunciaCard: DenunciaCard
  },
  data() {
    return {
      denuncias: [
        { id: 1, texto: "ROBO / HURTO" , img : "assets/categorias/robo-wide.jpg"},
        { id: 2, texto: "NARCOTRÁFICO" , img : "assets/categorias/corrupcion-wide.jpg"},
        { id: 3, texto: "ROBO CELULAR" , img : "assets/categorias/robo-wide"}
      ]
    };
  }
};
</script>


<style>
.text-bold {
  font-family: "dinBold";
}

.btn-primary-denuncia {
  display: inline-block;
  font-weight: 400;
  font-family: Raleway-SemiBold;
  font-size: 13px;
  color: #fff;
  letter-spacing: 1px;
  line-height: 15px;
  border: 2px solid #df691a;
  border-radius: 40px;
  background: transparent;
  transition: all 0.3s ease 0s;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  line-height: 1.5;
}

.btn-primary-denuncia:hover {
  color: #fff;
  background-color: #bd5916;
  border-color: #b15315;
}

.secundario {
  min-height: 600px;
  background-color: #6d7163;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8vh;
  padding-bottom: 15vh;
  z-index: 1000;
}

.whiteFont {
  color: white;
}
</style>
