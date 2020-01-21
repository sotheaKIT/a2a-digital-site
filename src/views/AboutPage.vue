<style src="../styles/about.css" scope></style>
<template>
  <div id="about-page">
    <div class="l_header">
      <Navigator/>
   </div>
   <!-- <div class="l_wrapper">
      <div class="blog-card">
        <div class="meta">
          <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
        </div>
        <div class="description">
          <h1>Learning to Code</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        </div>
      </div>
      <div class="blog-card alt">
        <div class="meta">
          <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"></div>
        </div>
        <div class="description">
          <h1>Mastering the Language</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        </div>
      </div>
   </div> -->
   <!-- End -->
  <Footer/>
  </div>
</template>

<script>



import Navigator from '../components/navigator/navigator.vue'
import Footer from '../components/footer/footer.vue'

export default {
  name: 'AboutPage',
  components: {
    Navigator,
    Footer
  }
}
</script>


