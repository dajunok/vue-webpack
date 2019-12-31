var _ = require('lodash');



var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);

var data = [1,2,3,4,5];

console.log(_.chunk(data,2)[1]);

//json5支持注释：//与/**/
let json_1={
    "path": "http//www.baidu.com",/*地址*/
    "master":{
         "rootport":9999,//端口
         "webport":9998,
         "log":"./logs/masterlog.log"//log文件路径
    }
 
}
console.log(json_1.path);