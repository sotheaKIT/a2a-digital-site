<style src="../styles/job.css" scope></style>
<template>
  <div id="jobs">
    <div class="l_jobslide">
      <h1>We are hiring</h1> 
    </div>
    <JobJoinTeam/>
    <div class="l_job__container">
      <JobHeaderBtn/>
      <JobCard/>
    </div>
  </div>
</template>

<script>

import JobHeaderBtn from '../components/jobheaderbtn/JobHeaderBtn'
import JobCard from '../components/jobcard/JobCard'
import JobJoinTeam from '../components/jobjointeam/JobJoinTeam'
export default {
  name: 'JobsPage',
  components: {
    JobHeaderBtn,
    JobCard,
    JobJoinTeam
  }
}
</script>

