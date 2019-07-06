<template>
  <div id="resumen">



       <hr>
     <div id="actions">
    <div class="form-cancel-button">
      <button type="button" class="btn btn-primary" @click="anterior">Anterior</button>
      <button type="button" class="btn btn-primary" @click="cancelar">Cancelar</button>
    </div>

    <div class="form-right-button">
      <button type="button" class="btn btn-primary" @click="finalizar">Finalizar</button>
    </div>
    </div>
      <!-- modal -->
    <b-modal
      ref="modal-cancelar"
      headerClass="header-toc"
      hide-footer
      cancel-title="Cancelar"
      ok-title="Aceptar"
      title="Salir">
      <div class="d-block text-center">
        <p class="warning ng-binding">¿Estás seguro de salir y borrar todos los datos?</p>
      </div>
      <footer class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="cancelarModal">NO</button>
        <button type="button" class="btn btn-primary" @click="aceptarModal">SI</button>
      </footer>
    </b-modal>
  </div>
</template>
<script>
export default {
  props :{
    denunciante    : Object,
    denunciado     : Object,
    localizacion   : Object,
    caracteristica : Object
  },
  data() {
    return {

    };
  },
  methods: {
    anterior(){
        this.$emit('decrement-step')
    },
    finalizar() {
        this.$emit('finalizar')
    },
    cancelar() {
      this.$refs["modal-cancelar"].show();
    },
    cancelarModal() {
      this.$refs["modal-cancelar"].hide();
    },
    aceptarModal() {
      alert("aceptar modal");
    }
  },
  created() {
     this.$scrollTo('#denunciante', 'body', 2000);
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
</style>
