<template>

   <!--
    <div class="bs-docs-section">
      <div class="row">
        <div class="col-lg-12">
          <div class="bs-component">
            <div class="presentacion" >

              <p class="lead text-center">
                <button
                  class="btn btn-primary-denuncia btn-lg text-din btn-rounded"
                  role="button"
                  @click="showPageDenuncia">
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
  -->

<div class="img-wrapper">
    <img class="img-responsive" src="../assets/images/vecinoweb.png" height="200px">
    <div class="img-overlay">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p class="lead text-center">
                <button
                  class="btn btn-primary-denuncia btn-lg text-din btn-rounded"
                  role="button"
                  @click="showPageDenuncia">
                  <span>
                    <strong>DENUNCIÁ</strong>
                  </span>
                </button>
              </p>
    </div>
</div>

</div>

</template>
<script>


export default {
  components: {
  },
  data() {
    return {
      denuncias: [
        {
          id: 1,
          texto: "ROBO / HURTO",
          img: "assets/categorias/robo-wide.jpg"
        },
        {
          id: 2,
          texto: "NARCOTRÁFICO",
          img: "assets/categorias/corrupcion-wide.jpg"
        },
        { id: 3, texto: "ROBO CELULAR", img: "assets/categorias/robo-wide" }
      ]
    };
  },
  methods : {
    showPageDenuncia() {
      this.$router.push('/denuncia/general')
    }

  }
};
</script>


<style>

.img-wrapper {
  position: relative;
 }

.img-responsive {
  width: 100%;
  height: 80%;
}

.img-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.img-overlay:before {
  content: ' ';
  display: block;
  /* adjust 'height' to position overlay content vertically */
  height: 50%;
}

.text-titulo {
  font-family: "dinBold";
  color: #EBEBEB;
  padding-top: 50px;
}
.text-centro{
  font-family: 'din';
  color: #EBEBEB;
}
.sombra {
    text-shadow: 0px 2px 2px rgba(0,0,0,0.4);
}

.intro {
    color: #fff;
    font-size: 20px;
    line-height: 1.4;
    height: 250px;
    -webkit-transition: opacity 0.2s,-webkit-transform 0.35s;
    transition: opacity 0.2s,transform 0.35s;
    max-width: 700px;
    display: inline-block;
}
.home-title {
    font-size: 45px;
    margin-top: 30 px!important;
    margin-bottom: 5px !important;
}

.btn-primary-denuncia {
  display: inline-block;
  font-weight: 700;
  font-family: Raleway-SemiBold;
  font-size: 13px;
  color: #fff;
  letter-spacing: 3px;
  line-height: 15px;
  border: 2px solid rgb(204, 124, 122);
  background-color: #801C1A;
  border-radius: 40px;
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

.caja-imagen-robo {
  background-image: url(../assets/categorias/robo-wide.jpg);
 width: 100%!important;
   height: 200px!important;
  background-size: initial;
}

.caja-imagen-corrupcion {
  background-image: url(../assets/categorias/corrupcion-wide.jpg);
  background-size: cover;
  height: 28vh;
  position: inherit;
  /*border-radius: 15px 15px 0px 0px;*/

  height: 200px;
  width: 100%;
}

.caja-imagen-violencia {
  background-image: url(../assets/categorias/violencia-wide.jpg);
  background-size: cover;
  height: 28vh;
  position: inherit;
  /*border-radius: 15px 15px 0px 0px;*/

  height: 150px;
  width: 100%;
}

.caja-header-2 {
  background-color: #1955a6;
  font-size: 14px;
}

.btn-low2 {
    top: 30%;
    left: 35%;
    position: relative;
    background: rgba(0,0,0,0.4);
    padding: 8px 12px;
    border-radius: 10px;
    border-width: 0.125rem;
    border-color: rgba(255,255,255,0.8);
    font-size: 2.3vh;
}
.btn-low2:hover {
  color: #fff;
  background-color: #bd5916;
  border-color: #b15315;
}

.presentacion {
    background-image: url(../assets/images/rsz_1vecinoweb.png);
    background-size: cover;
    padding-left: 30px;
    text-align: center;
    padding-top: 50px;
    padding: 30px;
    vertical-align: middle;
    height: 90vh;
    position: relative;
}
.whiteFont {
    color: white;
}
</style>
