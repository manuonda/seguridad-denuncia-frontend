<template>
<div>
 <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-primary2">

      <div class="collapse navbar-collapse" id="navbarCollapse">
         <ul class="nav2 navbar-nav">
        <li class="nav-item">
          <router-link tag="a" to="/" >DENUNCIAS</router-link>
        </li>
          <li class="nav-item">
         <router-link  tag="a" to="/dependencia" >DEPENDENCIAS</router-link>
        </li>
         <li class="nav-item">
          <router-link  tag="a" to="/comisaria" >COMISARIAS</router-link>
         </li>
      </ul>

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
import Pie from './components/Pie.vue';

export default {
  name: "app",
  components :  {
     pie : Pie
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
    background-color: #1955a6 ! important;
}


.menu-background {
    /*background-color: #DF691A  !important;*/
    /* background-color: #1955a6; */
    background-color: #801C1A;
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
    font-family: 'din';
}

.nav2 > li > a:hover, .nav2 > li > a:focus {
    text-decoration: none;
    background-color: #567890;
    color: #ffffff;
}



</style>
