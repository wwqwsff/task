function doMath(a, b, callback){
    return callback(a,b)
}
function suum(a,b){
   return a+b
}
function multipy(a,b){
    return a*b
}
console.log(doMath(23,2,suum))
console.log(doMath(23,2,multipy))


function creatCounter(a){
    return function(b){
        return a+b
    }
}
const counter = creatCounter(10)
console.log(counter(4))
console.log(counter(56))
console.log(counter(2))
//bbb