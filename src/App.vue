<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/A2A-digital-logo.svg">
    <HomePage msg="A2A-digital"/>
  </div>
</template>
<script>
import HomePage from './views/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>