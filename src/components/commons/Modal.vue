<template>
  <div>
     <!-- modal -->

  </div>
</template>
<script>
export default {
  methods: {

    cancelarModal() {
      this.$refs["modal-cancelar"].hide();
    },
    aceptarModal() {
     this.$emit("finalizar-denuncia");
    }
  }

}
</script>
<style>

</style>
