<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
      <vue-headful
              :title="title + ' | A2A Digital'"
              :description="description"
              :keywords="keywords"
      />
      <Slide/>
      <div class="l_section">
        <ContentCard/>
        <CardProduct/>

        
      </div>
  </div>
</template>

<script>

import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product.vue'
import ContentCard from '../components/content-card/content-card.vue'


export default {
  name: 'Home',
  components: {
    Slide,
    CardProduct,
    ContentCard,
  },
    data() {
        return {
            title: 'Home',
            description: 'A2A Digital provides you the best solution for AI Development, system development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.',
            site_name: 'A2A Digital',
            keywords: 'a2a digital, cambodia, AI development, IOT development service, Cloud Computing, RPA install support, Blockchain development, PWA development, VR/AR development, Odoo ERP customize, Digital Marketing, Cyber Security, web development, app development, ux ui'
        }
    }
}
</script>
