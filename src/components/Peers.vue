<template>
  <v-container fill-height class="pa-0">
    <v-btn
      color="red"
      dark
      fab
      fixed
      bottom
      left
      @click.stop="dialog = !dialog"
    >
      <v-icon>add_alert</v-icon>
    </v-btn>
    <map-component :markers="markers"></map-component>
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-text class="red">
          <span class="white--text headline">Help notification has been sent to nearby users!</span>
        </v-card-text>
        <v-card-actions class="red">
          <v-spacer></v-spacer>
          <v-btn
            color="white"
            flat
            @click="dialog = false"
          >
            Got it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
  import MapComponent from '@/components/MapComponent'

  export default {
    components: {
      MapComponent
    },
    data () {
      return {
        center: { lat: 37.774929, lng: -122.419418 },
        markers: [{
          position: { lat: 37.600646, lng: -122.369547 }
        }, {
          position: { lat: 37.599829, lng: -122.369110 }
        }],
        places: [],
        currentPlace: null,
        dialog: false
      }
    }
  }
</script>

<style scoped>

</style>
