<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
    <Navigator/>
    <div class="l_contrainer">
      <Slide/>
      <ServicesPage/>
      <ContactPage/>
      <JobsPage/>
      <ProductsPage/>
      <CardProduct />
      <PartnersPage/>
       <Footer/>
    </div>
  </div>
</template>

<script>

// import AboutPage from '../views/AboutPage'
import ContactPage from '../views/ContactPage'
import JobsPage  from '../views/JobsPage'
import ProductsPage from '../views/ProductsPage'
import ServicesPage from '../views/ServicesPage'
import PartnersPage from '../views/PartnersPage'
import Navigator from '../components/navigator/navigator.vue'
import Footer from '../components/footer/footer.vue'
import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product'


export default {
  name: 'Home',
  components: {
    ContactPage,
    JobsPage,
    ProductsPage,
    PartnersPage,
    ServicesPage,
    Navigator,
    Footer,
    Slide,
    CardProduct
  }
}
</script>

