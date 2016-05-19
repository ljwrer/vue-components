/**
 * Created by Ray on 2016/5/5.
 */
export const readyData=state=>state.sendCar.ready;
export const orderData=state=>{
    var ret=[];
    if(state.sendCar.order[state.sendCar.orderCacheIndex]){
        ret.push(state.sendCar.order[state.sendCar.orderCacheIndex])
    }
    return ret
};
export  const pickerData=state=>state.sendCar.picked;
export const allPickedAge=state=>
    state.sendCar.picked.reduce(
        (prev,group)=>prev+group.data.reduce(
            (prev,item)=>prev+item.age,0
        ),0
    );
