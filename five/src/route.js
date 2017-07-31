/**
 * Created by xinjundong on 2017/6/28.
 */
import Router from 'vue-router';
import Login from './login.vue';
import Home from './home.vue';
import list from './component/list.vue';
import TJ from './component/tj.vue';
import Add from './component/add.vue';
Vue.use(Router);

export default  new Router({
    routes:[
        {path:'/login', component: Login},
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'list',
                    component: list
                },
                {
                    path: 'add',
                    component: Add,
                },
                {
                    path: 'update/:id',
                    component:Add,
                },
                {
                    path: 'tj',
                    component: TJ
                }
            ]
        },
        {path: '/home', redirect :'/home/list'},
        {path: '/', redirect :'/login'},
    ]
})