/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tables from './module/tables'
import {UPDATE_MSG} from './mutation-types'
Vue.use(Vuex);
const state={
    msg:null
}
const modules={
    tables
};
const mutations={
    UPDATE_MSG(state,msg){
        state.msg=msg
    }
}
const store=new Vuex.Store({
  modules,state,mutations
});
window.store=store;
export default store
