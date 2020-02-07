<style src="../styles/home.css" scoped></style>
<template>
    <div id="home-page">
        <Slide/>
        <ContentCard/>
        <CardProduct/>
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
            ContentCard
        },
        data() {
            return {
                title: 'Home',
                description: 'd'
            }
        },
        metaInfo: {
            title: 'Home',
            meta: [
                {name: 'description', content: 'Description'},
                {
                    name: 'keywords',
                    content: 'a2a digital, cambodia, AI development, IOT development service, Cloud Computing, RPA install support, Blockchain development, PWA development, VR/AR development, Odoo ERP customize, Digital Marketing, Cyber Security, web development, app development, ux ui'
                },
                {property: 'og:title', content: 'Home - A2A Digital'},
                {property: 'og:site_name', content: 'A2A Digital, inc.'},
                {property: 'og:type', content: 'website'},
                {
                    property: 'og:description',
                    content: 'A2A Digital provides you the best solution for AI Developmentsystem development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.'
                }
            ]
        }
    }
</script>
