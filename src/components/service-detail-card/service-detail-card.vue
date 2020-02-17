<style src="./service-detail-card.css" scoped></style>
<template src="./service-detail-card.html"></template>

<script>
    export default {
        name: "ServiceDetailCard",
        props: {
            cards: null
        } ,
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