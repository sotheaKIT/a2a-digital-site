<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <!-- <Navigator></Navigator>  -->
    <!-- <HomePage></HomePage> -->
    <!-- <JobPage></JobPage> -->
    <SolutionPage/>

     <!-- <Footer></Footer> -->
  </div>
</template>
<script>
// import HomePage from './views/HomePage.vue'
// import Navigator from './components/navigator/navigator'
// import Footer from './components/footer/footer'
// import JobPage from './views/JobsPage'
import SolutionPage from './views/SolutionPage'


export default {
  name: 'App',
  components: {
    //  HomePage,
    // JobPage,
    // Navigator,
    // Footer
    SolutionPage
  }
}
</script>
