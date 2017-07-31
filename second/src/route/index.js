/**
 * Created by xinjundong on 2017/6/22.
 */
import Router from 'vue-router';
import Home from '../component/home.vue';
import List from '../component/list.vue';
import About from '../component/about.vue';
Vue.use(Router);
export default new Router({
    routes : [
        {path: '/home', component: Home},
        {path: '/list', component: List},
        {path: '/about', component: About},
        { path: '/', redirect: '/list' }
    ]
});