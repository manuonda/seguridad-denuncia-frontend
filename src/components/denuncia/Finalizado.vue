<template>
  <div class="form-resume" id="inicio">
        <p class="resume-header">RESULTADO DE LA DENUNCIA REALIZADA</p>
         <div class="form-group">
           <label> Numero de guía</label>
            <p> {{seguimiento}} </p>
         </div>

     <br>
     <hr>
    <div id="actions">
    <div class="form-right-button">
      <button type="button" class="btn btn-primary" @click="inicio">Inicio</button>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props :{
    seguimiento : String,
  },
  data() {
    return {
    };
  },
  methods: {
    inicio() {
        this.$emit('inicio-denuncia');
    },
  },
  created() {
     this.$scrollTo('#inicio', 'body', 2000);
  }
}
</script>
<style>
.form-resume .anonymous-warn {
    display: none;
}

.form-resume p, .form-resume pre {
    padding-top: 0px;
    color: #AAA;
    max-width: 90vw;
}
.form-resume p, .form-resume pre {
    padding-top: 0px;
    color: #AAA;
    max-width: 90vw;
}

.form-control-static {
    min-height: 34px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 0;
}
pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.resume-images {
  display: flex;
  box-sizing: border-box;
}

file-upload-resume {
    margin: 0px 20px 20px 0px;
}
</style>
