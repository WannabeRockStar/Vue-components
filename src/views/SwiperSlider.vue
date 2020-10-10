<template>
  <div class="container" @mouseenter="$refs.mySwiper.$swiper.autoplay.stop()" @mouseleave="$refs.mySwiper.$swiper.autoplay.start()">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in 5" :key="index">
        <img :src="image" alt="asd">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  // If you use Swiper 6.0.0 or higher
  // import 'swiper/swiper-bundle.css'
  
  export default {
    name: 'carrousel',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        image: "https://images.unsplash.com/photo-1598126190601-18e6f09f7b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
          // Some Swiper option/callback...
        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>

  .container {
    max-width: 1326px;
    margin: auto;
  }

</style>