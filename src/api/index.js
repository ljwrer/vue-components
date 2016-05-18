/**
 * Created by Ray on 2016/5/12.
 */
import {TableResource,OrderResource} from './resource'
export default {
    getTable(...options){
        return TableResource.query(...options)
    },
    getOrder(...options){
        return OrderResource.query(...options)
    }
}
