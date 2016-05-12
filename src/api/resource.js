/**
 * Created by Ray on 2016/5/12.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
const API_ROOT='/'
Vue.http.options.root = API_ROOT
export const TableResource=Vue.resource('/table{/index}')
