<style src="../styles/solution.css" scope></style>
<template>
  <div id="SolutionPage">
    <!-- <SolutionsHome/> -->
    <SolutionDetail/>
    <SolutionCard/>
  </div>
</template>

<script>
// import SolutionsHome from '../components/solutions-home/SolutionsHome'
import SolutionCard from '../components/solutions-card/SolutionCard'
import SolutionDetail from '../components/solutions-detail/SolutionDetail'
export default {
  name: 'SolutionPage',
  components:{
    // SolutionsHome,
    SolutionDetail,
    SolutionCard
  }
}
</script>

