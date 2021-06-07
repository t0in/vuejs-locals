<template>
  <h2 class="p-mb-0 p-mt-3">Saved places</h2>
  <Card v-for="place in savedPlaces" v-bind:key="place.id">
    <template #title>{{ place.title }}</template>
    <template #content>
      Lat: {{ place.positions.lat }} / Lng: {{ place.positions.lng }}
    </template>
    <template #footer>
      <div class="p-text-right">
        <Button
          icon="pi pi-star"
          label="View"
          class="p-button-primary"
          style="margin-left: 0.5em"
          @click="viewPlace(place.positions)"
        />
        <Button
          icon="pi pi-times"
          label="Delete"
          class="p-button-danger"
          style="margin-left: 0.5em"
          @click="removePlace(place)"
        />
      </div>
    </template>
  </Card>
</template>

<script>
import { placesService } from "@/services";

export default {
  props: {
    map: Object
  },

  data() {
    return {
      savedPlaces: [],
    };
  },

  mounted() {
    placesService.getSavedPlaces().then((data) => (this.savedPlaces = data));
  },

  methods: {
    viewPlace() {
      // this.map.setZoom(8);
      // this.map.setCenter(positions);
    },
  },
};
</script>

<style>
</style>
