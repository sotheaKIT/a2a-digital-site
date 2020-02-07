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
        created () {
            document.title = this.title + ' - A2A Digital'
            document.head.querySelector('meta[name=description]').content = 'A2A Digital provides you the best solution for AI Developmentsystem development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.'
            document.head.querySelector('meta[name=keywords]').content = ''
            document.head.querySelector("meta[property='og:title']").content = document.title
            // document.head.querySelector("meta[property='og:description']").content = document.head.querySelector('meta[name=description]').content
            document.head.querySelector("meta[property='og:image']").content = '/logo_color.svg'
        }
    }
</script>
