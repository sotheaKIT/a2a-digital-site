<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <div class="l_contrainer">
      <component :is="currentMenu" :right="side === 'right' ? true: false"> </component>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>  
import Footer from './components/footer/footer.vue'
import slide from './components/navigator/Menu/slide.vue'
  
export default {
  name: 'App',
  data() {
        return {
          side: 'right',
          currentMenu: 'slide'
        };
      },
  components: {
    Footer,
    slide,
    
  }
}
</script>