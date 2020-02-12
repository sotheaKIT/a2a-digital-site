<style src="./solutions-card.css" scoped></style>
<template src="./solutions-card.html"></template>


<script>
    export default {
        name: 'SolutionCard',
        props:{
            feature: null
        } ,
        data: function() {
            return {
                route : String 
            }
        },

        created : function(){
           this.route = this.$route.params.solution 
        }

    }
</script>