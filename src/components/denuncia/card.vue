<template>
<div>

  <div class="card mb-3">
  <h3 class="card-header">Card header</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <img style="height: 200px; width: 100%; display: block;"  alt="Card image">


  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
  </div>


</template>
<script>
export default {
  props: { texto: String, img: String }
};
</script>
<style>
.caja-container {
  border-width: 2px;
  border-color: white;
  border-radius: 20px;
  background-color: #1955a6;
}

.caja-imagen{
  background-size: cover;
  height: 28vh;
  position: inherit;
  border-radius: 16px 16px 0px 0px;
}

.btn-low {
  top: 30%;
  left: 50%;
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px 12px;
  border-radius: 10px;
  border-width: 0.125rem;
  border-color: rgba(255, 255, 255, 0.8);
  font-size: 2.3vh;
}
.btn-denuncia {
  margin: 15px -50px;
  position: relative;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  background-color: #9aca3c;
  color: #fff;
  font-family: "dinBold";
}

.caja-header {
  background-color: #1955a6;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  padding: 5px 5px 5px 5px;
  font-family: "din";
  min-height: 50px;
  align-items: center;
  display: flex;
  border-radius: 5px;
}
</style>
