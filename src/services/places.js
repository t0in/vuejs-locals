import store from '@/store';
export const placesService = {
  addPlace,
  removePlace,
  getSavedPlaces
};

async function getSavedPlaces () {
  return store.getters.getPlaces;
}

async function removePlace (place) {
  store.dispatch('removePlace', place);
}

async function addPlace (place) {
  store.dispatch('addPlace', place);
}
