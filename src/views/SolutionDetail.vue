<style src="../styles/solution-detail.css" scoped></style>
<template>
    <div class="solution_container">
        <div v-for="solutionDetailContent in SolutionDetailContents" v-bind:key="solutionDetailContent.id">
            <vue-headful
                    :title="solutionDetailContent['meta'][0]['title'] + ' | A2A Digital'"
                    :description="solutionDetailContent['meta'][0]['description']"
                    :keywords="solutionDetailContent['meta'][0]['keywords']"
            />
            <SolutionDetailHeader v-if="solutionDetailContent['header'] != null"
                                  :header="solutionDetailContent['header']"/>
            <SolutionDetailCard v-if="solutionDetailContent['feature'] != null"
                                :feature="solutionDetailContent['feature']"/>
            <SolutionOverall v-if="solutionDetailContent['overall'] != null"
                             :overall="solutionDetailContent['overall']"/>
            <Cardproduct/>
        </div>
    </div>
</template>

<script>

    import SolutionDetailHeader from '../components/solutions-detail/SolutionDetail.vue'
    import SolutionDetailCard from '../components/solutions-card/SolutionCard.vue'
    import SolutionOverall from '../components/solution-overall/SolutionOverall.vue'
    import Cardproduct from '../components/card-product/card-product.vue'
    import {mapGetters, mapActions} from 'vuex'


    export default {
        name: 'SolutionDetail',
        components: {
            SolutionDetailHeader,
            SolutionDetailCard,
            SolutionOverall,
            Cardproduct
        },
        data: function () {
            return {
                solution: String,
                type: "solution/solution-content-"
            }
        },
        computed: {
            ...mapGetters({
                //content server
                SolutionDetailContents: 'serviceDetailContent/content'
            }),
        },

        mounted: function () {
            this.actionDetailLoadContent(this.solution)
        },

        methods: {
            ...mapActions({
                actionDetailLoadContent: 'serviceDetailContent/load'
            }),
        },
        created() {
            this.solution = this.type + this.$route.params.solution;
        }
    }
</script>