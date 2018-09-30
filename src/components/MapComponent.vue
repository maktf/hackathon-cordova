<template>
  <GmapMap
    :center=center
    :zoom="16"
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
    props: ['markers'],
    data () {
      return {
        center: {lat: 37.599749, lng: -122.370005},
        places: [],
        currentPlace: null
      }
    }
  }
</script>

<style scoped>

</style>
