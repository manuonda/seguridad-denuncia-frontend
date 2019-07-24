<template>
  <div>
    <!--
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-primary2">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span class="sr-only ng-binding">Desplegar navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#">
          <img src="src/assets/images/membrete_buzon.png" class="navbar-brand-left" />
        </a>
        <div class="navbar-brand-right hidden-xs"></div>
      </div>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="nav2 navbar-nav">
          <li class="nav-item">
            <router-link tag="a" to="/">DENUNCIAS</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" to="/dependencia">DEPENDENCIAS</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" to="/comisaria">COMISARIAS</router-link>
          </li>
        </ul>
      </div>
    </nav>
   -->
    <!--

    <div id="main-navigation" class>
      <a class="navbar-brand" href="https://www.gba.gob.ar/">
        <img src="./assets/images/membrete.png" />
      </a>

      <div class="container2">

        <div id="main-navigation-inside" class="clearfix">
          <div class>
            <div class="col-md-8">
              <nav role="navigation">
                <div class="region region-navigation">
                  <div
                    id="block-tb-megamenu-menu-menu-principal-prueba"
                    class="block block-tb-megamenu clearfix"
                  >
                    <div class="content">
                      <div class="tb-megamenu tb-megamenu-menu-menu-principal-prueba">
                        <button
                          data-target=".nav-collapse"
                          data-toggle="collapse"
                          class="btn btn-navbar tb-megamenu-button menuIstance-processed"
                          type="button"
                        >
                          <i class="fa fa-reorder"></i>
                        </button>
                        <div class="nav-collapse always-show">
                          <ul class="tb-megamenu-nav nav level-0 items-6">
                            <li
                              data-id="2963"
                              data-level="1"
                              data-type="menu_item"
                              data-class
                              data-xicon
                              data-caption
                              data-alignsub
                              data-group="0"
                              data-hidewcol="0"
                              data-hidesub="0"
                              class="tb-megamenu-item level-1 mega"
                            >
                              <router-link tag="a" to="/">DENUNCIAS</router-link>
                            </li>

                            <li
                              data-id="2968"
                              data-level="1"
                              data-type="menu_item"
                              data-class
                              data-xicon
                              data-caption
                              data-alignsub
                              data-group="0"
                              data-hidewcol="0"
                              data-hidesub="0"
                              class="tb-megamenu-item level-1 mega"
                            >
                              <router-link tag="a" to="/dependencia">DEPENDENCIAS</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
       <a class="navbar-brand2" href="https://www.gba.gob.ar/">
           <img src="./assets/images/membrete_buzon.png" />
        </a>
    </div>-->

  <nav
      class="navbar navbar-light navbar-expand-md bg-faded justify-content-center bg-primary2"
      style="margin-bottom: 0px;"
    >
     <!--
      <a href="http://seguridad.jujuy.gob.ar/">
        <img src="./assets/images/membrete.png" />
      </a>
      -->
      <a class="navbar-brand2" href="http://seguridad.jujuy.gob.ar/">
            <img src="./assets/images/membrete_buzon.png" />
          </a>
      <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <!--
        <ul class="nav2 navbar-nav">
          <li class="nav-item">
            <router-link tag="a" to="/">INICIO</router-link>
          </li>
        </ul>
        -->
        <!--
        <div class="nav navbar-nav ml-auto w-100 justify-content-end">
          <a class="navbar-brand2" href="http://seguridad.jujuy.gob.ar/">
            <img src="./assets/images/membrete_buzon.png" />
          </a>
        </div>
        -->
      </div>
    </nav>

    <!-- container -->
    <div class="page-content container">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <pie></pie>
  </div>
</template>

<script>
import Pie from "./components/Pie.vue";


export default {
  name: "app",
  components: {
    pie: Pie
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.logoOrganismo {
  float: left;
  margin: 0 1.5%;
  height: 110px;
  padding: 15px 0;
}
#seccionBuscador {
  float: right;
  width: 300px;
  padding-top: 15px;
}

.contHeader {
  overflow: auto;
  max-width: 1100px;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
  background-color: #1955a6 !important;
}

.menu-background {
  /*background-color: #DF691A  !important;*/
  /* background-color: #1955a6; */
  background-color: #801c1a;
  border-color: #003461 !important;
}
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.navbar-primary2 {
  font-size: 14px;
}

.bg-primary2 {
  background-color: #1955a6 !important;
}

.nav2 > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
  color: white;
  font-family: "din";
}

.nav2 > li > a:hover,
.nav2 > li > a:focus {
  text-decoration: none;
  background-color: #567890;
  color: #ffffff;
}

.navbar-header {
  width: 100%;
  height: 100%;
  background-color: white;
}
.navbar-brand-left {
  float: left;
  height: 70px;
  padding-left: 10%;
  padding-bottom: 10px;
  padding-top: 15px;
}

img {
  vertical-align: middle;
}
img {
  border: 0;
}
#main-navigation {
  height: 103px;
  z-index: 999;
}
#main-navigation {
  background-color: #1955a6;
  position: relative;
  z-index: 11;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075),
    0 10px 0 rgba(0, 0, 0, 0.01);
  -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075), 0 10px 0 rgba(0, 0, 0, 0.01);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075), 0 10px 0 rgba(0, 0, 0, 0.01);
}
a.navbar-brand {
  z-index: 99;
}
.navbar-brand {
  float: left;
  padding: 10px 15px;
  font-size: 18px;
  /*line-height: 20px;*/
  position: absolute;
}
a.navbar-brand2 {
  z-index: 99;
}
.navbar-brand2 {
  float: right;
  padding: 10px 45px;
  font-size: 18px;
  line-height: 20px;
}
a.navbar-brand > img {
  width: 100% !important;
  height: auto !important;
  padding-left: 35% !important;
}
a.navbar-brand2 > img {
  width: 100% !important;
  /* height: auto !important;
  padding-right: 35% !important;
 */
}

div#main-navigation > .container {
  padding-top: 26px;
}
div#block-tb-megamenu-menu-menu-principal-prueba {
  float: right !important;
}
.tb-megamenu {
  position: relative;
}

.tb-megamenu {
  background-color: #1955a6;
}

.container2 {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
  padding-top: 26px;
  float: left;
}
</style>
