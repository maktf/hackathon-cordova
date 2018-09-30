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
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../static/img/v.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
  export default {
    name: 'Peers'
  }
</script>

<style scoped>

</style>
