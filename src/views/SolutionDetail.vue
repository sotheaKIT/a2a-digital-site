<template>
    <div id="solution-page">
        <div v-for="solutionDetailContent in SolutionDetailContents" v-bind:key="solutionDetailContent.id">
            <vue-headful
                    :title="solutionDetailContent['meta'][0]['title'] + ' | A2A Digital'"
                    :description="solutionDetailContent['meta'][0]['description']"
                    :keywords="solutionDetailContent['meta'][0]['keywords']"
            />
            <tagline-hero
                    :title="solutionDetailContent['header'][0]['title']"
                    :short_desc="solutionDetailContent['header'][0]['shortDesc']"
                    :imagePath="'solution' + '/' + route + '.svg'"
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
    import TaglineHero from "../components/tagline-hero/tagline-hero";


    export default {
        name: 'SolutionDetail',
        components: {
            TaglineHero,
            SolutionDetailHeader,
            SolutionDetailCard,
            SolutionOverall,
            Cardproduct
        },
        data: function () {
            return {
                solution: String,
                type: "solution/solution-content-",
                route: String
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
            this.route = this.$route.params.solution;
        }
    }
</script>