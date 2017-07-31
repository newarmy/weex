/**
 * Created by xinjundong on 2017/6/28.
 */
import app from './index.vue';
import router from './route';
import store from './vuex';
import {sync} from 'vuex-router-sync';
sync(store, router);
router.beforeEach(function(to, from, next) {
	
   if(to.path.indexOf('login') > -1) {
	   next();
   } else {
	   if(store.state.isLogin) {
		   next();
	   } else {
		   next('/login')
	   }
   }
});
new Vue({
    el: '#root',
    store,
    router,
    render: h =>h(app)
});
