<style src="./service-work-result.css" scope></style>
<template src="./service-work-result.html">
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'ServiceWorkResult',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          // autoplay: {
          //   delay: 2500,
          //   disableOnInteraction: false
          // }, 
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          } 
        }
      }
    }
    
 

}
</script>