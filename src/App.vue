<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/A2A-digital-logo.svg"> -->
    <!-- <HomePage></HomePage> -->
    <ServicePage></ServicePage>
    <AboutPage msg="A2A-digital"/>
    
    
  </div>
</template>
<script>
// import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage'
import ServicePage from './views/ServicesPage'
export default {
  name: 'App',
  components: {
    ServicePage,
    AboutPage

  }
}
</script>