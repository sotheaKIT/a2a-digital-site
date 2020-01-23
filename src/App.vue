<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <div class="l_contrainer">
      <Navigator/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Navigator from './components/navigator/navigator.vue'
import Footer from './components/footer/footer.vue'
export default {
  name: 'App',
  components: {
    Navigator,
    Footer
  }
}
</script>