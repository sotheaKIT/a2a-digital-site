<template>
  <div id="home-page">
  <AboutPage/>
  <ContactPage/>
  <JobsPage/>
  <ProductsPage/>
  <ServicesPage/>
     
  </div>
</template>

<script>

import AboutPage from '../views/AboutPage'
import ContactPage from '../views/ContactPage'
import JobsPage  from '../views/JobsPage'
import ProductsPage from '../views/Products'
import ServicesPage from '../views/ServicesPage'


export default {
  name: 'Home',
  components: {
    AboutPage,
    ContactPage,
    JobsPage,
    ProductsPage,
    ServicesPage
  }
}
</script>

