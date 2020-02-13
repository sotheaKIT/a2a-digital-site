<style src="./service-detail-page.css"></style>
<template src="./service-detail-page.html"></template>

<script>
    export default {
        name: 'ServiceDetailPageComp',
        props: {
            header: null
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