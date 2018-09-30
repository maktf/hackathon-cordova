// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGoogleHeatmap from 'vue-google-heatmap'
// import VueTouch from 'vue-touch'
// Just some test comment

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCKeydCdFuc9y3NNZrt3FaYrvyAQcIChdc',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})

Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyCKeydCdFuc9y3NNZrt3FaYrvyAQcIChdc'
})
// Vue.use(VueTouch)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
