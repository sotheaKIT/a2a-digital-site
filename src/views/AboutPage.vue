<style src="../styles/about.css" scope></style>
<template>
    <div id="about-page">
        <vue-headful
                :title="title + ' | A2A Digital'"
                :description="description"
                :keywords="keywords"
        />
        <AboutHero></AboutHero>
        <AboutContentCard></AboutContentCard>
        <AboutCard></AboutCard>
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
        },
        data() {
            return {
                title: 'About',
                description: 'A2A digital is the best company that supports and provides solutions for Cambodia companies to catch up industry revolution 4.0 in the IT field.',
                keywords: 'cambodia, a2a digital, web development, technology, IT solution, web design, solutions'
            }
        }
    }
</script>


