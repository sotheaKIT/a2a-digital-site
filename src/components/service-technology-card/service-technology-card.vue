<style src="./service-technology-card.css"></style>
<template src="./service-technology-card.html"></template>

<script>
    export default {
        name: 'ServiceTechnologyCard',
        props: {
            tools: null
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