import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Amplify読み込み
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
