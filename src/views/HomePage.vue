<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
      <Slide/>
      <ServicesPage/>
      <CardProduct/>
      <PartnersPage/>
  </div>
</template>

<script>


import ServicesPage from '../views/ServicesPage'
import PartnersPage from '../views/PartnersPage'
import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product.vue'

export default {
  name: 'Home',
  components: {
    PartnersPage,
    ServicesPage,
    Slide,
    CardProduct,
  }
}
</script>

