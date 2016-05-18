/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tables from './module/tables'
import sendCar from './module/sendCar'
Vue.use(Vuex);
const modules={
    tables,sendCar
};
const store=new Vuex.Store({
  modules
});
window.store=store;
export default store
