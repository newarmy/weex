/**
 * Created by xinjundong on 2017/6/28.
 */
import Vuex from 'vuex';
import * as actions from './action';
import * as types from './Mutation-Type';

if(weex.config.env.platform !== 'Web') {
    Vue.use(Vuex);
}

export default new Vuex.Store({
    state: {
        arr: [],
		isLogin: false
    },
    getters: {
        total: function (state) {
            let total = 0;
            state.arr.forEach(function(e, i) {
               total += Number(e.num);
            });
            return total;
        },
		length: function(state) {
			return state.arr.length;
		}
    },
    actions,
    mutations: {
		[types.LOGIN](state, flag) {
			state.isLogin = flag;
		},
        [types.ALL_DATA](state, data) {
            state.arr = data;
        },
        [types.ADD_DATA](state, obj){
            let index = state.arr.length;
            obj.id = index;
            state.arr.push(obj);
        },
        [types.UPDATE_DATA](state, obj) {
            console.log(obj.id);
            state.arr[obj.id] = obj;
        },
        [types.REMOVE_DATA](state, idx) {
            state.arr.splice(idx, 1);
        }
    }
})
