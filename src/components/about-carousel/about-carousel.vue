
<style src="./about-carousel.css" scoped></style>
<template src="./about-carousel.html"></template>


<script>
// import Slick from 'vue-slick';
export default {
    name : "AboutCarouse",
    data() {
      return {
        ourTeamSwiper: {
          initialSlide: 0,
          slidesPerView: 4,
          slidesPerGroup: 4,
          // spaceBetween: 20,
          loop: true,

          cssMode: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false
          }, 
          speed:60000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            980: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            }
          }, 

          
        }
      }
    }
          
}

</script>