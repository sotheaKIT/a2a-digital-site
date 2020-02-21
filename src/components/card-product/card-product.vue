<style src="./card-product.css" scoped></style>
<template src="./card-product.html"></template>
<script>

    export default {
        name: 'CardProduct',
        props: {
            data: null
        },
        data() {
            return {
                swiperSlides: {
                    initialSlide: 0,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: {
                        660: {
                            slidesPerView: 1.2,
                            slidesPerGroup: 1,
                            speed: 1000,
                        },
                        720: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        }
                    }
                }
            }
        }
    }
</script> 