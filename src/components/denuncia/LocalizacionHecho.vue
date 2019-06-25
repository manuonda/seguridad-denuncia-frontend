<template>
  <div>

  </div>
</template>
<script>

import {en, es} from 'vuejs-datepicker/dist/locale';
import Datepicker from "vuejs-datepicker";
// Import this component
import datePicker from 'vue-bootstrap-datetimepicker';
// Import date picker css
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  props : {
    localizacion : Object
  },
  components : {
    Datepicker
  },
  data() {
    return {
      en: en,
      es: es,
      date: new Date(),
      submitted : false,
      format: "dd MMM yyyy",
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
      }
    }
  }
}
</script>
<style>

</style>
