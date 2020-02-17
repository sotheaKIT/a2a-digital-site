<template src="./tagline-hero.html"></template>

<script>
    export default {
        name: "tagline-hero",
        props: {
            title: {
                type: String,
                default: 'title'
            },
            short_desc: {
                type: String,
                default: 'short description'
            },
            imagePath: {
                type: String,
                default: ''
            }
        },
        data: function() {
            return {
                route : String
            }
        },

        created : function(){
            this.route = this.$route.params.service
        }
    }
</script>

<style src="./tagline-hero.css" scoped></style>
