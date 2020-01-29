<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>
<script>


import  HomePage  from "./views/HomePage";


export default {
  name: 'App',
  components: {
      HomePage
  }
}

</script>