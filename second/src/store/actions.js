import * as types from './mutation-types';
import load from '../api/loadData';
export function getAllData({commit}){
    load.getAllData(function(arr) {
        console.log(arr);
        console.log('----------------');
        commit(types.ALL_DATA, arr);
    });
}