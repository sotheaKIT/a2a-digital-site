<style src="../styles/job.css" scope></style>
<template>
  <div id="jobs-page">
    <div class="l_jobslide">
      <h1>We are hiring</h1> 
    </div>
      <JobHeaderBtn/>
      <JobCard/>
  </div>
</template>

<script>
import JobHeaderBtn from '../components/jobheaderbtn/JobHeaderBtn'
import JobCard from '../components/jobcard/JobCard'

export default {
  name: 'JobsPage',
  components: {
    JobHeaderBtn,
    JobCard,
  }
}
</script>

