<template>
  <div class="p-grid">
    <div
      class="p-col-12 p-md-4 p-lg-3 p-mr-2 p-ml-2 p-shadow-4 p-text-left p-p-3"
    >
      <h2 class="p-m-0">Search</h2>
      <span class="p-fluid">
        <AutoComplete
          v-model="selectedPlace"
          :suggestions="filteredPlaces"
          @complete="searchPlaces($event)"
          field="description"
          :forceSelection="true"
          @item-select="selectItem($event)"
        />
      </span>
      <SavedPlaces />
    </div>
    <div class="p-col p-p-0 p-mr-2 p-mr-sm-0">
      <GoogleMapLoader
        :mapConfig="mapConfig"
        apiKey="AIzaSyDEreC9sjs0ooaPfI-7kcDNzXOgAk8JYjc"
        ref="map"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMapLoader from "@/components/GoogleMapLoader";
import SavedPlaces from "@/components/SavedPlaces";

const mapSettings = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 16,
};

export default {
  components: {
    GoogleMapLoader,
    SavedPlaces,
  },

  data() {
    return {
      initialPosition: { lat: -28.4837049, lng: -49.0120509 },
      selectedPlace: "",
      filteredPlaces: [],
      map: null,
    };
  },

  async created() {
    this.initialPosition = await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        reject("Unable to get location");
      }
    });
  },

  autocompleteService: null,

  computed: {
    mapConfig() {
      // console.log(this.initialPosition);
      return {
        ...mapSettings,
        center: this.initialPosition,
      };
    },
  },

  methods: {
    searchPlaces({ query }) {
      let req = {
        input: query.trim(),
      };

      if (!this.autocompleteService)
        this.autocompleteService =
          new window.google.maps.places.AutocompleteService();

      this.autocompleteService.getQueryPredictions(req, (results) => {
        this.filteredPlaces = results;
        console.log(results);
      });
    },

    selectItem(a) {
      console.log(a);
    },
  },
};
</script>
