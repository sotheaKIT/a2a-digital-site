<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
      <Slide/>
       <ContentCard/>
      <CardProduct/>
      <PartnersPage/>
  </div>
</template>

<script>
import PartnersPage from '../views/PartnersPage'
import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product.vue'
import ContentCard from '../components/content-card/content-card.vue'

export default {
  name: 'Home',
  components: {
    PartnersPage,
    Slide,
    CardProduct,
    ContentCard
  }
}
</script>
