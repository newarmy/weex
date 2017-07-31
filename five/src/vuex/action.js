/**
 * Created by xinjundong on 2017/6/28.
 */
import * as types from './Mutation-Type';
import api from '../api';

export function getAllData({commit}) {
    api.getAll(function(arr) {
       commit(types.ALL_DATA, arr);
    });
};
export function login({commit}, obj) {
	api.login(obj, function(flag) {
		commit(types.LOGIN, flag);
	});
}