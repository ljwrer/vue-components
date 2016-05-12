/**
 * Created by Ray on 2016/5/12.
 */
import {TableResource} from './resource'
export default {
    getTable({index}){
        return TableResource.query({index})
    }
}
