<template>
  <div id="home-page">
  <Navigator/>
  <Slide/>
  <!-- <ServicesPage/> -->
  <!-- Just show Page only Example :  <AboutPage/>  -->
  <!-- <AboutPage/>
  <ContactPage/>
  <JobsPage/>
  <ProductsPage/> -->
  <!-- <CardProduct /> -->
  <!-- <PartnersPage/> -->
  <ProfilePage/>

   <!-- End -->
  <!-- <Footer/> -->
  </div>
</template>

<script>

// import AboutPage from '../views/AboutPage'
// import ContactPage from '../views/ContactPage'
// import JobsPage  from '../views/JobsPage'
// import ProductsPage from '../views/Products'
// import ServicesPage from '../views/ServicesPage'
// import PartnersPage from '../views/PartnersPage'
// import Navigator from '../components/navigator/navigator.vue'
// import Footer from '../components/footer/footer.vue'
// import Slide from '../components/slide/slide.vue'
// import CardProduct from '../components/card-product/card-product'
import ProfilePage from '../views/ProfilePage'


export default {
  name: 'Home',
  components: {
    // AboutPage,
    // ContactPage,
    // JobsPage,
    // ProductsPage,
    // PartnersPage,
    // ServicesPage,
    // Navigator,
    // Footer,
    // Slide,
    // CardProduct,
    ProfilePage
    
  }
}
</script>

