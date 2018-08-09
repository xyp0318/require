//1.Require能方法接受一个数组和一个回调函数将模块引入
function require(arr, fn) {
    arr.forEach(function(val) {
        var str = `<script src=${val}></script>`
    })
}
//2.Define定义的模块能够正确返回内容
function define(fn) {
    var obj = fn();
    if (typeof obj === "undefined") {
        return fn
    } else {
        return obj
    }
}