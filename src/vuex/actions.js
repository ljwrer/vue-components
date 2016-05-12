/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
import api from '../api'
export const updateTable=function ({dispatch,state:{index}}) {
    api.getTable({index}).then(function (res) {
        dispatch(types.UPDATE_TABLE_DATA,res.data)
    },function (res) {
        dispatch(types.UPDATE_MSG,res)
    })
};
