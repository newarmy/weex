import APP from './index.vue';
import router from './route';
import store from './store';
import { sync } from 'vuex-router-sync';
sync(store, router);

new Vue({
    el: '#root',
    store,
    router,
    render: h => h(APP)
});