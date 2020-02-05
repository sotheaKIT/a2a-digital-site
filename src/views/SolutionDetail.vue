<template>
    <div id="product-detail">
        <SolutionDetailHeader/>
        <SolutionDetailCard/>
        <Cardproduct/>
    </div>
</template>

<script>

import SolutionDetailHeader from '../components/solutions-detail/SolutionDetail.vue'
import SolutionDetailCard from '../components/solutions-card/SolutionCard.vue'
import Cardproduct from '../components/card-product/card-product.vue'


export default {
    name: 'SolutionDetail',
    components: {
        SolutionDetailHeader,
        SolutionDetailCard,
        Cardproduct
  }
}
</script>