<style src="../styles/about.css" scope></style>
<template>
  <div id="about-page">
    <AboutHero></AboutHero>
    <AboutContentCard></AboutContentCard>
    <AboutCard>/</AboutCard>
    <AboutCarousel></AboutCarousel>
  </div>
</template>

<script>

import AboutCard from '../components/about-card/about-card.vue'
import AboutContentCard from '../components/about-content-card/about-content-card.vue'
import AboutHero from '../components/about-hero/about-hero.vue'
import AboutCarousel from '../components/about-carousel/about-carousel'

export default {
  name: 'AboutPage',
  components: {
    AboutCard,
    AboutContentCard,
    AboutHero,
    AboutCarousel
  }
}
</script>


