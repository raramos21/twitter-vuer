import TwitterService from '../../services/twitter-service.ts'

export default {
    name: 'ExploreView',
    data() {
        return {
            trendName: null,
            trends: null
        }
    },
    beforeMount() {
        this.getTrendingData();
    }, 
    methods: {
        async getTrendingData(){
            const data = await TwitterService.getTrending();
            console.log(data.trends);
            this.$set(this, "trendName", data.locations[0].name);
            this.$set(this, "trends", data.trends);
        }
    }
}