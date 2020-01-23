<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/A2A-digital-logo.svg"> -->
    <!-- <HomePage></HomePage> -->
    <AboutPage></AboutPage>
  </div>
</template>
<script>
// import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'

export default {
  name: 'App',
  components: {
    AboutPage,
    // HomePage

  }
}
</script>