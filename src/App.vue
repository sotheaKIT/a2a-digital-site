<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/A2A-digital-logo.svg"> -->
    <JobsPageDetail msg="A2A-digital"/>
    <!-- <HomePage msg="A2A-digital"/> -->

  </div>
</template>
<script>
import JobsPageDetail from './views/JobsPageDetail.vue'
export default {
  name: 'App',
  components: {
    JobsPageDetail
  }
}
// import HomePage from './views/HomePage.vue'
// export default {
//   name: 'App',
//   components: {
//     HomePage
//   }
// }
</script>