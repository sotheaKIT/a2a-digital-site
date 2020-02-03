<style src="./styles/app.css"></style>
<template>
    <div id="app">
        <header-nav/>
        <component :is="currentMenu" :right="side === 'right' ? true: false"></component>
        <div class="content">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import HeaderNav from './components/navigator/navigator'
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
            HeaderNav,
            slide
        }
    }
</script>