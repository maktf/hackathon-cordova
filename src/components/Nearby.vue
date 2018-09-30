<template>
  <vue-google-heatmap :points="points"
                      :lat="37.774929"
                      :lng="-122.419418"/>
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
        currentPlace: null,
        points: [
          {lat: 37.786117, lng: -122.440119},
          {lat: 37.786564, lng: -122.440209},
          {lat: 37.786905, lng: -122.440270},
          {lat: 37.786956, lng: -122.440279},
          {lat: 37.800224, lng: -122.433520},
          {lat: 37.800155, lng: -122.434101},
          {lat: 37.800160, lng: -122.434430},
          {lat: 37.800378, lng: -122.434527},
          {lat: 37.800738, lng: -122.434598},
          {lat: 37.800938, lng: -122.434650},
          {lat: 37.801024, lng: -122.434889},
          {lat: 37.800955, lng: -122.435392},
          {lat: 37.800886, lng: -122.435959}
        ]
      }
    }
  }
</script>
