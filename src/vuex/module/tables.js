/**
 * Created by Ray on 2016/5/9.
 */
import {UPDATE_TABLE_DATA} from '../mutation-types'
const state = {
    tableData:[],
    index:1
};
const mutations = {
    UPDATE_TABLE_DATA(state,data){
        state.tableData=data;
    }
}
export default {
    state,mutations
};
