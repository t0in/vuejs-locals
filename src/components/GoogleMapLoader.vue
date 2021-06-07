<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(google) && Boolean(map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
  },

  data() {
    return {
      google: null,
      map: null,
    };
  },

  async mounted() {
    const googleMapApi = new Loader({
      apiKey: this.apiKey,
      version: "weekly",
      libraries: ["drawing", "geometry", "places", "visualization"],
    });
    await googleMapApi.load();
    this.google = window.google;

    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;

      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);

    },
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
  box-sizing: initial;
  height: 500px;
}

.google-map img {
  max-width: none;
}
</style>
