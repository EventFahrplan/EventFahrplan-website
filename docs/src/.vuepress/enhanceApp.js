import Buefy from 'buefy'
import 'buefy/dist/buefy.css' // TODO Only apply to /features

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Buefy)
}
