/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

const VuePictureSwipe = require("vue-picture-swipe")
//import VuePictureSwipe from 'vue-picture-swipe'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css' // TODO Only apply to /features

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Buefy)
  Vue.use('vue-picture-swipe', VuePictureSwipe)
}
