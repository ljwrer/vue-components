import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueCharts from 'vue-charts'
import VueTables from 'vue-tables'
import tables from './components/tables.vue'
import VueResource from 'vue-resource'
import Vuetable from 'vuetable/src/components/Vuetable.vue';


//
// thirdly, register components to Vue
//
Vue.component('vuetable', Vuetable);

Vue.use(VueResource)
/* eslint-disable no-new */
Vue.config.debug = true
Vue.use(VueRouter);
Vue.use(VueCharts);
Vue.use(VueTables.client);
const router = new VueRouter();
router.map({
    'table':{
        component:tables
    },
  '/:path': {
    component: {
      template: '<div>' +
      '<div v-if="$loadingRouteData">Loading ...</div>'+
      '<div v-else>' +
      '<p>当前路径: {{$route.path}}</p>'+
      '<p>当前路由参数: {{$route.params | json}}</p>'+
      '</div>'+
      '</div>',
      route:{
        data:function ({next,abort}) {
          setTimeout(next,500);
        }
      }
    }
  },
  '/':{
    component:{
      template:'<div>' +
      '<div v-if="$loadingRouteData">Loading ...</div>'+
      '<div v-else>' +
      '<p>回到主页咯!</p>' +
      '</div>'+
      '</div>',
      route:{
        data:function ({next}) {
          setTimeout(next,1000);
        }
      }
    }
  }
});
router.start(App,'#app');
window.router=router;

