<template>
  <div></div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      
    };
  },
  props:['ubicacion'],

  mounted() {
    this.geolocate();
    if(this.ubicacion != undefined){
      this.setPlace(this.ubicacion)
    }
  },

  methods: {
    
  }
};
</script>
