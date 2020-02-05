<style src="./content-card.css" scoped></style>
<template src="./content-card.html"></template>

<script>


// Map
import {mapGetters ,mapActions} from 'vuex'

export default {
    name : "ContentCard",  
    computed: {
    ...mapGetters({
      //content server 
        serviceContents : 'serviceContent/content'
      }),
    },

    mounted: function () {
      this.actionLoadContent()
    },

    methods: {
    ...mapActions({
        actionLoadContent : 'serviceContent/load'
    }),

   loadSrc(src) { 

      return require('@/assets/component/content-card/'+src)
    }
    

    }


}
</script>