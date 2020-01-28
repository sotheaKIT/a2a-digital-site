<style src="../styles/service-detail.css" scope></style>
<template>
  <div>
    <ServiceDetailPageComp></ServiceDetailPageComp>
    <ServiceDetailCard></ServiceDetailCard>
    <ServiceTechnologyCard></ServiceTechnologyCard>
  </div>
  
</template>

<script>
import ServiceDetailPageComp from '../components/service-detail-page/service-detail-page.vue'
import ServiceDetailCard from '../components/service-detail-card/service-detail-card.vue'
import ServiceTechnologyCard from '../components/service-technology-card/service-technology-card.vue'
export default {
  name: 'ServiceDetailPage',
  components: {
    ServiceDetailPageComp,
    ServiceDetailCard,
    ServiceTechnologyCard
  }
}
</script>