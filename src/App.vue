<style src="./styles/app.css"></style>
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
                currentMenu: 'slide'
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
                {name: 'description', content: 'Description'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'A2A Digital'},
                {property: 'og:site_name', content: 'My Site'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                // {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
                {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'Description from og:description'}

            ]
        }
    }
</script>