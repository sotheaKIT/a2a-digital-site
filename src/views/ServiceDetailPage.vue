<style src="../styles/service-detail.css" scope></style>
<template>
  <div>
      <div v-for="serviceDetailContent in serviceDetailContents" v-bind:key="serviceDetailContent.id">
      <ServiceDetailPageComp v-bind:header="serviceDetailContent['header']" ></ServiceDetailPageComp>
      <ServiceDetailCard :cards="serviceDetailContent['cards']"></ServiceDetailCard>
      <ServiceTechnologyCard :tools = "serviceDetailContent['tools']"></ServiceTechnologyCard>
      <ServiceWorkResult :results = "serviceDetailContent['results']"></ServiceWorkResult>
      <ServiceAIImportant :business = "serviceDetailContent['business']"></ServiceAIImportant>
      <ServiceContactForm></ServiceContactForm>
      </div>
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
  data : function () {
    return {
      service:String,
      type : "service/service-content-"
    }
  },
  computed: {
    ...mapGetters({
      //content server 
        serviceDetailContents : 'serviceDetailContent/content'
      }),
    },

    mounted: function () {
      this.actionDetailLoadContent(this.service)
    },

  methods: {
    ...mapActions({
        actionDetailLoadContent : 'serviceDetailContent/load'
    }),
  },
  created() {
    this.service =this.type + this.$route.params.service;
  },
}
</script>