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
  <!--<vue-google-heatmap :points="points"-->
                      <!--:lat="37.774929"-->
                      <!--:lng="-122.419418"/>-->
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
    data () {
      return {
        center: { lat: 37.774929, lng: -122.419418 },
        markers: [],
        places: [],
        currentPlace: null
      }
    }
  }
</script>

<style scoped>

</style>
