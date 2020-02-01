<style src="./content-card.css" scoped></style>
<template src="./content-card.html"></template>

<script>
// Util
import getImgUrl from '../../util/getImageUrl'

// Map
import {mapGetters ,mapActions} from 'vuex'

export default {
    name : "ContentCard",  
    data : function() {
      return {
        getImageUrl : getImgUrl()
      }
        
    },
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
    }


}
</script>