<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <ProfilePage></ProfilePage>
  </div>
</template>
<script>
import ProfilePage from './views/ProfilePage'
export default {
  name: 'App',
  components: {
      ProfilePage
  }
}
</script>