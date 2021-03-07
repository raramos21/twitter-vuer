import TwitterService from '../../services/twitter-service.ts'

export default {
    name: 'AppMain',
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
            this.$set(this, "trendName", data.locations[0].name);
            this.$set(this, "trends", data.trends);
        }
    }
}