/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
import api from '../api'
import Vue from 'vue'
export const updateTable=function ({dispatch,state:{tables:{index}}}) {
    api.getTable({index}).then(function (res) {
        dispatch(types.UPDATE_TABLE_DATA,res.data.list)
    },function (res) {
        dispatch(types.UPDATE_MSG,JSON.stringify(res))
    })
    // console.log(index)
    // Vue.http('/table',{
    //     params:{index}
    // }).then(function (res) {
    //     dispatch(types.UPDATE_TABLE_DATA,res.data)
    // },function (res) {
    //     dispatch(types.UPDATE_MSG,res)
    // })
};
