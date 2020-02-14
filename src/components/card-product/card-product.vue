<style src="./card-product.css" scoped></style>
<template src="./card-product.html"></template>
<script>
 
  export default {
    name: 'CardProduct',
    data() {
      return {
        swiperSlides: {
          initialSlide: 0,
          slidesPerView: 4,
          slidesPerGroup: 4,
          // spaceBetween: 15,
          loop: true,
          cssMode: true,
          freeMode: true,
          speed:1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              speed:1000,
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