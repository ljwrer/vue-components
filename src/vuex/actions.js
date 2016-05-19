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
export const getDetail=function ({dispatch,state:{sendCar:{order}}},id) {
    const searchOrderGroupIndex=order.findIndex(group=>id===group.id);
    if(searchOrderGroupIndex>-1){
        dispatch(types.SWITCH_ORDER_CACHE,searchOrderGroupIndex)
    }else {
        api.getOrder({id}).then(function (res) {
            const group={
                data:res.data.list,
                id,
                picked:false
            };
            dispatch(types.ADD_ORDER,group);
            dispatch(types.SWITCH_ORDER_CACHE,order.length-1);
        })
    }
};
export const toggleOrder=function ({dispatch},group) {
    dispatch(types.TOGGLE_PICK,group);
    if(group.picked){
        dispatch(types.ADD_PICKED,group)
    }else{
        dispatch(types.REMOVE_PICKED,group.id)
    }
};

export const deletePicker=function ({dispatch},data,index) {
    //TODO 删除触发order bug
    dispatch(types.DELETE_PICKED,data,index);
}


