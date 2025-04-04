let user = {
    name: 'Alena',
    hello: function(){
    console.log('Привет, я'+' '+this.name)
    }
}
user.hello()

const user2 = {
    name:'Sergay'
}
user.hello.call(user2)

const user3 = {
    name: 'Katy',
    hello:()=>{
        console.log('Привет, я'+' '+this.name)
    }
}
user3.hello()//this не используется внутри стрелочной функции
//nnn
let v =0