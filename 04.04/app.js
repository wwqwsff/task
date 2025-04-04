//1
console.log("Джава скрипт подключен!")
//2
let namee = "Анна"
let age = 25
let isStudent = true
console.log(namee, age, isStudent)
//3
let str = "Привет";
let num = 42;
let isTrue = true;
let empty = null;
let notDefined;
let bigNumber = 9007199254740991n;
let uniqueSymbol = Symbol("id");
console.log(typeof str,typeof num,typeof isTrue,
    typeof empty,typeof notDefined,typeof bigNumber,
    typeof uniqueSymbol
)
//4
a = 54
b = 333
c = a+b
m = a - b
n = c * m
d = n/ 2
console.log(c,m,n,d)
f = 13
let five  = 5 ==6
let one = 5>4
let hat = 56>=433
let bob  = 45!=43
console.log(five,one,hat,bob)

let hasMoney = true;
let isSunny = false;
let goShop = hasMoney && isSunny?'go':'not go'
let goShop2 = hasMoney || isSunny?'go':'not go'
console.log(goShop, goShop2)
//5

const Age = 14
if(Age<12){
    console.log('Ты ребенок')
}
else if (Age<18){
    console.log('Ты подросток')
}
else{
    console.log('Ты взрослый')
}
let day = 1
let whatDay
switch(day){
    case 1:
        whatDay = 'Понедельник'
        break
     case 2:
         whatDay = 'Вторник'
         break
    case 3:
         whatDay = 'Среда'
        break
    case 4:
        whatDay = 'Чтверг'
        break
    case 5:
         whatDay = 'Пятница'
         break
     case 6:
         whatDay = 'Суббота'
         break
    case 7:
         whatDay = 'Вс'
         break
                                                         
}
console.log(whatDay)
//6

/* for(i = 1;i <=10; i++){ //Повторение кода с условием 
    console.log(i)
} */

/* let i = 1
while(i<=20){
   if(i%2===0){
    console.log(i)
   }
   i++
} */

/* let input
 do{
   input = prompt('Введите число')
   input = Number(input)
 } while(input!==5)
console.log('Вы ввели 5') */

//7
let number = [1, 2, 3, 4, 5]
number.forEach((p)=>console.log(p))

let number1 = [1, 2, 3, 4, 5]
number1.map((p)=>console.log(p*10))

let number2 = [1, 2, 3, 4, 5]
let newnum2 =  number2.filter((p)=>(p%2===0))
console.log(newnum2)

let sum = number.reduce((acc, p)=>{
    return acc+p
},0)
console.log(sum)
//8

function sum2(a,b){
    return a+b
}
console.log(sum2(33,55))
const sum3 = function(a,b){
    return a+b
}
console.log(sum3(23,55))

const sum4 = (a,b)=> a+b
console.log(sum4(33,22))

//9
