/**
 * Created by Ray on 2016/5/9.
 */
import {
    UPDATE_TABLE_DATA,
    UPDATE_READY,
    ADD_READY,
    TOGGLE_PICK,
    ADD_PICKED,
    REMOVE_PICKED,
    DELETE_PICKED
} from '../mutation-types'
const state = {
    ready:[],
    /*
    * detail:[
    *   {
    *       data:Array,
    *       picked:Boolean
    *   }
    * ]
    * */
    detail:[],
    picked:[]
};
const mutations = {
    [UPDATE_TABLE_DATA](state,data){
        state.tableData=data;
    },
    [UPDATE_READY](state,data){
        state.ready=data
    },
    [ADD_READY](state,data){
        state.detail.push({
            data:data,
            picked:false
        })
    },
    // [TOGGLE_ALL](state){
    //     state.forEach()
    // },
    [TOGGLE_PICK](state,group){
        group.picked=!group.picked
    },
    [ADD_PICKED](state,group){
        state.picked.push(group)
    },
    [REMOVE_PICKED](state,group){
        state.picked.$remove(group)
    },
    [DELETE_PICKED](state,id){
        state.picked=state.picked.forEach((group)=>{
            group.data=group.data.filter((order)=>{
                return !order.id===id
            })
        })
    }
}
export default {
    state,mutations
};
