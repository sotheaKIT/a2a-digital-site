<style src="./service-ai-important.css" scoped></style>
<template src="./service-ai-important.html">
</template>
<script>
    export default {
        name: 'ServiceAIImportant',
        props: {
            business: null
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