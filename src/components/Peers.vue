<template>
  <GmapMap
  :center=center
  :zoom="14"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
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
    name: 'Peers'
  }
</script>

<style scoped>

</style>
