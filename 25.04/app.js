/* obj = {name:"Alic",age:44
}

function newFunction(obj){
    const invert = {}
    for(const key in obj){
        invert[obj[key]] = key
    }
    return invert
} 
const invertObj = newFunction(obj)
console.log(invertObj) */


/* function zip(...objects){
    const reselt = {}
    for(const obj of objects){
        for(const key in obj){
            if(obj.hasOwnProperty(key)&& 
            !reselt.hasOwnProperty
        (key)){reselt[key]=
            obj[ key]
        }
        }
    }
    return reselt
} */