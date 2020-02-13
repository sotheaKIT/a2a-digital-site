<style src="./solutions-overall.css" scoped></style>
<template src="./solutions-overall.html"></template>


<script>

  export default {
    name: 'SolutionOverall',
    props: {
      overall: null
    },
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