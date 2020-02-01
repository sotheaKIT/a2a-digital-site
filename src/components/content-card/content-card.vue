<style src="./content-card.css" scoped></style>
<template src="./content-card.html"></template>

<script>
// Util
import getImgUrl from '../../util/getImageUrl.js'

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

    getImageUrl(pic) {
      var photo = getImgUrl(pic)
      return photo
    }
    

    }


}
</script>