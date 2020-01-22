<style src="../styles/job.css" scope></style>
<template>
  <div id="jobs-page">
    <Navigator/>
    <div class="l_jobslide">
      <h1>We are hiring</h1> 
    </div>
      <JobHeaderBtn/>
      <JobCard/>
      <!-- <Footer/> -->
  </div>
</template>

<script>

import Navigator from '../components/navigator/navigator.vue'
import JobHeaderBtn from '../components/jobheaderbtn/JobHeaderBtn'
import JobCard from '../components/jobcard/JobCard'
// import Footer from '../components/footer/footer.vue'

export default {
  name: 'JobsPage',
  components: {
    Navigator,
    JobHeaderBtn,
    JobCard,
    // Footer
  }
}
</script>

