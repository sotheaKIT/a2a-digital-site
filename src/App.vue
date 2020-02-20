<style src="./styles/app.css"></style>
<template>
    <div id="app">
        <component class="l_navigator" :is="currentMenu" :right="side === 'right' ? true: false"></component>
        <div class="l_container">
            <router-view/>
            <vue-progress-bar></vue-progress-bar>
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
        mounted () {
            //  [App.vue specific] When App.vue is finish loading finish the progress bar
            this.$Progress.finish()
        },
        components: {
            Footer,
            slide,
        },
        created () {
            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start()
           
        }
    }
</script>