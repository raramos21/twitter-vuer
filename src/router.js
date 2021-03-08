import Vue from 'vue'
import VueRouter from "vue-router"
import ExploreView from "./components/explore-view/explore-view"
import SearchView from "./components/search-view/search-view"
import TweetView from "./components/tweet-view/tweet-view"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Default",
        component: ExploreView
    },
    {
        path: "/explore",
        name: "Explore",
        component: ExploreView
    },
    {
        path: "/search/:keyword",
        name: "Search",
        component: SearchView,
        props: true
    },
    {
        path: "/settings",
        name: "Tweet",
        component: TweetView
    }
]

const router = new VueRouter({
    // history: createWebHistory(),
    routes
})

export default router;