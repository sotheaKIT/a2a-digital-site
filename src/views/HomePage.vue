
<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
   <div class="l_header">
      <Navigator/>
   </div>
   <div class="l_wrapper">
      <Slide/>
      <ServicesPage/>
      <!-- Just show Page only Example :  <AboutPage/>  -->
      <AboutPage/>
      <ContactPage/>
      <CardProduct/>
      <JobsPage/>
      <ProductsPage/>
      <PartnersPage/>
      <!-- End -->
   </div>
  <Footer/>
  </div>
</template>

<script>

import AboutPage from '../views/AboutPage'
import ContactPage from '../views/ContactPage'
import JobsPage  from '../views/JobsPage'
import ProductsPage from '../views/ProductsPage'
import ServicesPage from '../views/ServicesPage'
import PartnersPage from '../views/PartnersPage'
import Navigator from '../components/navigator/navigator.vue'
import Footer from '../components/footer/footer.vue'
import Slide from '../components/slide/slide.vue'
// import CardProduct from '../components/card-product/card-product.vue'

export default {
  name: 'Home',
  components: {
    AboutPage,
    ContactPage,
    JobsPage,
    ProductsPage,
    PartnersPage,
    ServicesPage,
    Navigator,
    Footer,
    Slide,
    // CardProduct
  }
}
</script>

