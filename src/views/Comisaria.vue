<template>
  <div>
    <subheader title="Comisarias"></subheader>
    <div class="container">

    </div>
    <pie></pie>
  </div>
</template>
<script>
import SubHeader from '../components/SubHeader.vue';
import Pie from '../components/Pie.vue';
export default {
   components :{
     subheader: SubHeader,
     pie      : Pie
   },
   data(){
     return{
         title: String
     }
   },
   methods:{

   },
   created(){
     console.log("created");
   }
}
</script>

<style>

</style>
