import Vuex from  'vuex';
import * as actions from './actions';
import * as types from './mutation-types';

//Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      arr: []
    },
    getters: {
        total: function(state) {
            return state.arr.length;
        }
    },
    actions,
    mutations: {
        [types.ALL_DATA](state, source) {
            state.arr = source;
            console.log(state.arr);
        }
    }


});