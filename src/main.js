import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPodcast, faVideo, faUser } from '@fortawesome/free-solid-svg-icons'
import my from 'animate.css'
library.add(faTrash, faPodcast, faVideo, faUser)
Vue.config.productionTip = false

new Vue({
  data: {
    image: '/Users/mert/Downloads/he.jpg'
  },
  router,
  render: h => h(App)
}).$mount('#app')
