
<style src="./about-carousel.css" scoped></style>
<template src="./about-carousel.html"></template>


<script>
import Slick from 'vue-slick';
export default {
    name : "AboutCarouse",
    components: { Slick },
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        };
    },   
       
}

</script>