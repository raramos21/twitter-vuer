import TwitterService from '../../services/twitter-service.ts'

export default {
    name: 'AppMain',
    data() {
        return {
            msg: 'hello world!',
            data: {}
        }
    },
    beforeMount() {
        this.getTrendingData();
    }, 
    methods: {
        async getTrendingData(){
            console.log('gettrendingdata');
            const { data } = await TwitterService.getTrending();
            // this.$set(this, "data", data);
            this.data = data;
        }
    }
}