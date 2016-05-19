/**
 * Created by Ray on 2016/5/9.
 */
import {
    UPDATE_TABLE_DATA,
    UPDATE_READY,
    ADD_ORDER,
    SWITCH_ORDER_CACHE,
    TOGGLE_PICK,
    ADD_PICKED,
    REMOVE_PICKED,
    DELETE_PICKED
} from '../mutation-types'
const state = {
    ready:[],
    order:[],
    orderCacheIndex:-1,
    picked:[]
};
const mutations = {
    [UPDATE_TABLE_DATA](state,data){
        state.tableData=data;
    },
    [UPDATE_READY](state,data){
        state.ready=data
    },
    [ADD_ORDER](state,group){
        state.order.push(group)
    },
    [SWITCH_ORDER_CACHE](state,index){
        state.orderCacheIndex=index
    },
    [TOGGLE_PICK](state,group){
        group.picked=!group.picked
    },
    [ADD_PICKED](state,group){
        state.picked.push(group)
    },
    [REMOVE_PICKED](state,id){
        state.picked=state.picked.filter((group)=>!(group.id===id))
    },
    // [DELETE_PICKED](state,id){
    //     state.picked=state.picked.forEach((group)=>{
    //         group.data=group.data.filter((order)=>{
    //             return !(order.id===id)
    //         })
    //     })
    // }
    [DELETE_PICKED](state,data,index){
        data.splice(index,1)
    }
}
export default {
    state,mutations
};
