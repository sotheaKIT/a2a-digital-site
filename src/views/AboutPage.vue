<style src="../styles/about.css" scoped></style>
<template>
    <div id="about-page">
        <vue-headful
                :title="title + ' | A2A Digital'"
                :description="description"
                :keywords="keywords"
        />
        <about-overview/>
        <about-ceo/>
        <AboutCard></AboutCard>
<!--        <AboutCarousel></AboutCarousel>-->
    </div>
</template>

<script>

    import AboutCard from '../components/about-card/about-card.vue'
    import AboutOverview from "../components/about-overview/about-overview";
    import AboutCeo from "../components/about-ceo/about-ceo";

    export default {
        name: 'AboutPage',
        components: {
            AboutCeo,
            AboutOverview,
            AboutCard,
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


