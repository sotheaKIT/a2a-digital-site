<style src="../styles/service-detail.css" scope></style>
<template>
  <div>
      <div v-for="serviceDetailContent in serviceDetailContents" v-bind:key="serviceDetailContent.id">
          <vue-headful
                  :title="serviceDetailContent['meta'][0]['title'] + ' | A2A Digital'"
                  :description="serviceDetailContent['meta'][0]['description']"
                  :keywords="serviceDetailContent['meta'][0]['keywords']"
          />
        <div class="l_service__detail__container">
          <div class="c_jobspage_detail l_padding__left">
            <div class="c_jobspage_title">
                <a>Service</a>
                 <img id="c_icon_service" src="../../public/assets/component/service-detail-page/arrow_right.svg">
                <a id="c_text">{{serviceDetailContent['header'][0]['title']}}</a>
            </div>
        </div>
        </div>
       <ServiceDetailPageComp v-if="serviceDetailContent['header'] != null" v-bind:header="serviceDetailContent['header']" ></ServiceDetailPageComp>
        <ServiceDetailCard v-if="serviceDetailContent['cards'] != null" :cards="serviceDetailContent['cards']"></ServiceDetailCard>
        <ServiceTechnologyCard v-if="serviceDetailContent['tools'] != null" :tools = "serviceDetailContent['tools']"></ServiceTechnologyCard>
        <ServiceWorkResult v-if="serviceDetailContent['results'] != null" :results = "serviceDetailContent['results']"></ServiceWorkResult>
        <ServiceManagement v-if="serviceDetailContent['management'] != null" :management = "serviceDetailContent['management']" />
        <ServiceComapareComp v-if="serviceDetailContent['compare'] != null" :compare = "serviceDetailContent['compare']"/>
        <ServiceAIImportant v-if="serviceDetailContent['business'] != null" :business = "serviceDetailContent['business']"></ServiceAIImportant>
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
    import ServiceComapareComp from '../components/service-cloud-detail-page/service-cloud-detail-page.vue'
    import ServiceManagement from '../components/service-management/service-management'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ServiceDetailPage',
        components: {
            ServiceDetailPageComp,
            ServiceDetailCard,
            ServiceTechnologyCard,
            ServiceWorkResult,
            ServiceAIImportant,
            ServiceContactForm,
            ServiceComapareComp,
            ServiceManagement
        },
        data: function () {
            return {
                service: String,
                type: "service/service-content-"
            }
        },
        computed: {
            ...mapGetters({
                //content server
                serviceDetailContents: 'serviceDetailContent/content'
            }),
        },

        mounted: function () {
            this.actionDetailLoadContent(this.service)
        },

        methods: {
            ...mapActions({
                actionDetailLoadContent: 'serviceDetailContent/load'
            }),
        },
        created() {
            this.service = this.type + this.$route.params.service;
        },
    }
</script>