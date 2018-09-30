<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :to="item.path"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" class="green lighten-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title + status"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click="dialog = true"
      >
        <v-icon class="black--text">visibility</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

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
  </v-app>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        dialog: false,
        cordova: Vue.cordova,
        clipped: false,
        drawer: true,
        items: [{
          icon: 'visibility',
          title: 'Nearby',
          path: '/'
        }, {
          icon: 'accessibility_new',
          title: 'Peers',
          path: '/peers'
        }, {
          icon: 'stars',
          title: 'Police Report',
          path: '/report'
        }, {
          icon: 'flag',
          title: 'Report Case',
          path: '/userreport'
        }, {
          icon: 'question_answer',
          title: 'User Messaging',
          path: '/messaging'
        }],
        miniVariant: false,
        title: 'Red Alert: ',
        status: 'MODERATE SAFE',
        statusReason: ['Your area do not have any reported cases', 'Probability: 0.2']
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
