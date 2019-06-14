<template>
  <div>
   <div>
    <div id="subheader" class="subheader">
      <span>{{title}}</span>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    props:{
      title:String

    },
    data(){
      return {
        subtitulo: 'Subtitulo'
      }
    }
}
</script>
<style>
.subheader {
    background-color: #8aca1c;
    height: 43px;
    font-size: 16px;
    font-family: 'dinBold';
    color: white;
    vertical-align: middle;
    line-height: 43px;
    padding-left: 15%;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
</style>

