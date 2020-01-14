<template>
  <div id="home-page">
  <Navigator/>
  <Slide/>
  <!-- Just show Page only Example :  <AboutPage/>  -->
  <AboutPage/>
  <ContactPage/>
  <JobsPage/>
  <ProductsPage/>
  <ServicesPage/>
   <!-- End -->
  <Footer/>
  </div>
</template>

<script>

import AboutPage from '../views/AboutPage'
import ContactPage from '../views/ContactPage'
import JobsPage  from '../views/JobsPage'
import ProductsPage from '../views/Products'
import ServicesPage from '../views/ServicesPage'
import Navigator from '../components/navigator/navigator.vue'
import Footer from '../components/footer/footer.vue'
import Slide from '../components/slide/slide.vue'

export default {
  name: 'Home',
  components: {
    AboutPage,
    ContactPage,
    JobsPage,
    ProductsPage,
    ServicesPage,
    Navigator,
    Footer,
    Slide
  }
}
</script>

