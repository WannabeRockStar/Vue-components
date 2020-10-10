import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router"
import Vuelidate from "vuelidate"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import style
import './assets/css/style.css'
import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)

new Vue({
  created() {
    AOS.init()
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
