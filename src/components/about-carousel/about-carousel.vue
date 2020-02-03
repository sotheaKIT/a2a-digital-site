
<style src="./about-carousel.css" scoped></style>
<template src="./about-carousel.html"></template>


<script>
// import Slick from 'vue-slick';
export default {
    name : "AboutCarouse",
    data() {
      return {
        ourTeamSwiper: {
          slidesPerView: 4,
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
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 3,
            spaceBetween: 30
            },
            // when window width is >= 640px
            720: {
            slidesPerView: 4,
            spaceBetween: 40
            }
        } 
          
        }
      }
    }
          
}

</script>