<style src="../styles/service-detail.css" scope></style>
<template>
  <div>
      <ServiceDetailPageComp></ServiceDetailPageComp>
      <ServiceDetailCard></ServiceDetailCard>
      <ServiceTechnologyCard></ServiceTechnologyCard>
      <ServiceWorkResult></ServiceWorkResult>
      <ServiceAIImportant></ServiceAIImportant>
      <ServiceContactForm></ServiceContactForm>
  </div>
  
</template>

<script>
import ServiceDetailPageComp from '../components/service-detail-page/service-detail-page.vue'
import ServiceDetailCard from '../components/service-detail-card/service-detail-card.vue'
import ServiceTechnologyCard from '../components/service-technology-card/service-technology-card.vue'
import ServiceWorkResult from '../components/service-work-result/service-work-result.vue'
import ServiceAIImportant from '../components/service-ai-important/service-ai-important.vue'
import ServiceContactForm from '../components/service-contact-form/service-contact-form.vue'
import {mapGetters ,mapActions} from 'vuex'
export default {
  name: 'ServiceDetailPage',
  components: {
    ServiceDetailPageComp,
    ServiceDetailCard,
    ServiceTechnologyCard,
    ServiceWorkResult,
    ServiceAIImportant,
    ServiceContactForm
  },
  computed: {
    ...mapGetters({
      //content server 
        serviceDetailContents : 'serviceDetailContent/content'
      }),
    },

    mounted: function () {
      this.actionDetailLoadContent()
    },

  methods: {
    ...mapActions({
        actionDetailLoadContent : 'serviceDetailContent/load'
    }),
  }
}
</script>