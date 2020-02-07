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
                title:'Page',
                side: 'right',
                currentMenu: 'slide'
            };
        },
        components: {
            Footer,
            slide
        },
        created () {
            document.title = this.title + ' - A2A Digital'
            document.head.querySelector('meta[name=description]').content = 'Description Here'
        }
    }
</script>