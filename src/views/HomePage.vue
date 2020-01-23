<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
      <Slide/>
      <ServicesPage/>
      <ContactPage/>
      <ProductsPage/>
      <CardProduct />
      <PartnersPage/>
  </div>
</template>

<script>

// import AboutPage from '../views/AboutPage'
import ContactPage from '../views/ContactPage'
import ProductsPage from '../views/ProductsPage'
import ServicesPage from '../views/ServicesPage'
import PartnersPage from '../views/PartnersPage'
import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product'


export default {
  name: 'Home',
  components: {
    ContactPage,
    ProductsPage,
    PartnersPage,
    ServicesPage,
    Slide,
    CardProduct
  }
}
</script>

