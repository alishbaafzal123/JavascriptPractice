
let a=false;
let b=true;

if(a){
for(let a=0;a<=5;a++){
    console.log(a)
}

}
else if(b)
{
    for(let a=2;a<=8;a++){
        console.log(a)
    } 
}
let c=10;
let d=4;
function name(){
    let b=3;
    if(b){
        var x=5;
        let y=10;
        const z=2;

    }
    
    console.log(x);

}

name();
objects
const Object={
    name:'Alishba',
    admin:false,
    obj2:{
        address2:430,
        address1:420
    },

    obj3:{
        num1:4,
        num2:3,
    }
}
console.log(Object["obj2"]["address1"])
console.log(Object.name)

const{
    name,obj2:{address2,address1},obj3:{num1,num2}
}=Object
console.log(name,address2,num1)

const Some={
    name:'Alishba',
    admin:false,

    object2:{
        address2:430,
        address1:420
    },
    getDetails :function (){
        console.log(this.name)  
    }
}

Some.getDetails()
