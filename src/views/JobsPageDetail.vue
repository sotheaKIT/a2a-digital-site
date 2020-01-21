<template>
    <div id="jobspage_detail"> 
        <JobsDetailPage/>
        <Footer/>
    </div>
</template>

<script>

// import Navigator from '../components/navigator/navigator.vue'
import JobsDetailPage from'../components/jobsdetail-page/jobspagedetail.vue'
import Footer from '../components/footer/footer.vue'

export default {
    name: "JobsPageDetail",
    components: {
        
        JobsDetailPage,
        Footer
    }
}
</script>