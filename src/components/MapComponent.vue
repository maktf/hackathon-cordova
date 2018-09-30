<template>
  <GmapMap
    :center=center
    :zoom="13"
    map-type-id="terrain"
    style="width:100%; height:100%"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
  export default {
    name: 'MapComponent',
    data () {
      return {
        center: {lat: 37.774929, lng: -122.419418},
        markers: [],
        places: [],
        currentPlace: null
      }
    }
  }
</script>

<style scoped>

</style>
