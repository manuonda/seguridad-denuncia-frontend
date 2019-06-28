<template>
  <div>
     <!-- calle -->
     <div class="form-group">
      <label for="calle">
       <div>Calle </div>
      </label>
      <input type="text" class="form-control" name="calle" id="calle"
        v-model="localizacion.calle">
      </div>

       <!-- numero -->
      <div class="form-group">
      <label for="calle">
       <div>Número</div>
      </label>
      <input type="text" class="form-control" name="calle" id="calle"
        v-model="localizacion.numero">
      </div>



    <div class="row">
      <div id="app" style="width: 200px ; height :200px">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  props: {
    localizacion: Object
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      latitud: 0,
      longitud: 0,
      zoom: 8,
      center: L.latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482)
    };
  }
};
</script>
<style>
#app {
    width: 100%;
    height: 500px;
    z-index: 0 !important;
}
</style>
