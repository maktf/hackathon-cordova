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
    <map-component></map-component>
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title
          class="display-3"
          primary-title
          class="green lighten-4 font-weight-bold"
        >
          {{ status }}
        </v-card-title>
        <v-card-text class="green lighten-4">
          <ul>
            <li class="font-weight-medium" v-for="reason in statusReason">{{reason}}</li>
          </ul>
        </v-card-text>
        <v-card-actions class="green lighten-4">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
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
        markers: [],
        places: [],
        currentPlace: null,
        dialog: false
      }
    }
  }
</script>

<style scoped>

</style>
