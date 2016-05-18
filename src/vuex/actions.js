/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
import api from '../api'
export const updateTable=function ({dispatch,state:{tables:{index}}}) {
    api.getTable({index}).then(function (res) {
        dispatch(types.UPDATE_TABLE_DATA,res.data.list)
    })
};

//待派车
export const updateReady=function ({dispatch}) {
    api.getTable().then(function (res) {
        dispatch(types.UPDATE_READY,res.data.list)
    })
};
export const getDetail=function ({dispatch},id) {
    api.getOrder({id}).then(function (res) {
        dispatch(types.ADD_PICKED,res.data.list)
    })
};
export const toggleAllOrder=function ({dispatch},group) {
    
};
export const toggleOrder=function ({dispatch},group) {

};
export const deleteOrder=function ({dispatch},group) {
    
}

