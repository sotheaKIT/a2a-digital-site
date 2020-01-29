<style src="../styles/job.css" scope></style>
<template>
  <div id="jobs-page">
    <div class="l_jobslide">
      <h1>We are hiring</h1> 
    </div>
    <JobJointeam/>
    <div class="l_job__container">
      <JobHeaderBtn/>
      <JobCard/>
    </div>
  </div>
</template>

<script>
import JobHeaderBtn from '../components/jobheaderbtn/JobHeaderBtn'
import JobCard from '../components/jobcard/JobCard'
import JobJointeam from '../components/jobjointeam/JobJoinTeam.vue';

export default {
  name: 'JobsPage',
  components: {
    JobHeaderBtn,
    JobCard,
    JobJointeam
  }
}
</script>

