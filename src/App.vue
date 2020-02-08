<template>
    <div id="app">
        <component :is="currentMenu" :right="side === 'right' ? true: false"></component>
        <div class="content">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import Footer from './components/footer/footer.vue'
    import slide from './components/navigator/Menu/slide.vue'

    export default {
        name: 'App',
        data() {
            return {
                side: 'right',
                currentMenu: 'slide',
            };
        },
        components: {
            Footer,
            slide
        },
        metaInfo: {
            title: 'Page Title',
            titleTemplate: '%s - A2A Digital',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {property: 'og:title', content: 'Home - A2A Digital'},
                {
                    property: 'og:description',
                    content: 'A2A Digital provides you the best solution for AI Developmentsystem development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.'
                },
                {property: 'og:site_name', content: 'A2A Digital, inc.'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://a2adigital-seo.netlify.com/'},
                {property: 'og:image', content: 'https://a2adigital-seo.netlify.com/img/a2adigital.png'},
            ]
        }
    }
</script>
<style src="./styles/app.css"></style>