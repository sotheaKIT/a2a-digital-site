<style src="./content-card.css" scoped></style>
<template src="./content-card.html"></template>

<script>


// Map
import {mapGetters ,mapActions} from 'vuex'

export default {
    name : "ContentCard",  
    data: function() {
      return {
        src :  [
          require('../../assets/home/ai.png'),
          require('../../assets/home/iot.png'),
          require('../../assets/home/cloud.png'),
          require('../../assets/home/blockchain.png'),
          require('../../assets/home/rpa.png'),
          require('../../assets/home/pwa.png'),
          require('../../assets/home/vr.png'),
          require('../../assets/home/erp.png'),
          require('../../assets/home/digital.png'),
          require('../../assets/home/cyber.png')
          
        ]
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

   loadSrc(src) { 
      return this.src[parseInt(src)]
    }
    

    }


}
</script>