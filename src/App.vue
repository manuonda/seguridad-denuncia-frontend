<template>
<div>

<div class="contHeader">


  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <img src="./assets/logo-footer.png"/>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="text-muted" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </a>
        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>
  <div class="row">

  </div>
</div>

<div class="container-fluid menu-background">
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link tag="a" to="/" class="nav-link">Inicio</router-link>
         </li>
        <li class="nav-item">
          <router-link tag="a" to="/denuncia" class="nav-link">Denuncia</router-link>
        </li>
          <li class="nav-item">
         <router-link  tag="a" to="/dependencia" class="nav-link">Dependencia</router-link>
        </li>
         <li class="nav-item">
          <router-link  tag="a" to="/comisaria" class="nav-link">Comisaria</router-link>
         </li>
      </ul>
    </div>
  </nav>


</div>
</div>

<div class="container">
<router-view></router-view>

</div>

</div>
</template>

<script>
export default {
  name: "app",
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
}

.menu-background {
    background-color: #DF691A  !important;
    border-color: #003461 !important;
}
.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
