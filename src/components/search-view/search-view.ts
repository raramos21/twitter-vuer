import TwitterService from '../../services/twitter-service.ts'

export default {
    name: 'SearchView',
    props: ['keyword'],
    data() {
        return {
            tweets: null
        }
    },
    beforeMount() {
        this.searchTweets(this.keyword);
    }, 
    methods: {
        async searchTweets(keyword){
            const data = await TwitterService.search(keyword);
            console.log(data);
            this.tweets = data.statuses;
            // this.$set(this, "trends", data.trends);
        },
        myFunction(tweet){ 
            let link = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
            console.log("link: ", link);
            window.open(link, "_blank");    
        }
    }
}