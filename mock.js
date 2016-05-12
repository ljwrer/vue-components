/**
 * Created by Ray on 2016/5/12.
 */
// 使用 Mock
var Mock = require('mockjs')
// Mock.setup({
//     timeout: '200-600'
// })
Mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})

