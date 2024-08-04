              //push//////
let num3=[1,2,3,34,4]
let r3= num3.push(56)            //add elements at last and returns new length
console.log(num3,r3);
            ///////// pop////////////
let num4=[1,2,3,34,4]
let r4= num4.pop()                ///remove last element of array
console.log(num4,r4);
         ////////////join/////////////////
let num5=[1,2,3,34,4]
let r5= num5.join("-")                ///join all elements with a separator
console.log(num5,r5);
          //////////shift////////////////
let num6=[1,2,3,34,4]
let r6= num.shift();               ///remove first element and return it
console.log(num6,r6);
            ///////unshift/////////////
let num7=[1,2,3,34,4]
let r7= num7.unshift(78);               ///Add new element at the start and return new length
console.log(num7,r7);
               /////concat////////
let num8=[1,2,3,34,4]
let num1=[5,6,7,8]
let num2=[8,10]
 let r8= num8.concat(num1,num2);               ///Join 2 or more arrays and then return them after joining while original array remain same
 console.log(num8,num2,r);     
               //////sort/////
let num9=[22,53,3,66,14,8,71]
let r9= num.sort();               ///sort the elements in alphabetial order
 console.log(num9);  
       /// in ascending and descending order////      
let numm=[22,53,3,66,14,8,71]
let compare=(a,b)=>{
    return a-b;
}
let rr= numm.sort(compare);               ///sort the elements in (b-a)ascending and (a-b)descending order and return in order form 
 console.log(num,r); 
              /// <<<reverse>>>//
 let numb=[1,2,3,34,4]
let rd= numb.reverse();                        ///reverse the the order of elements
console.log(numb);                    
           /// <<<splice>>>//
let ab=[1,2,3,34,4]
let rs= ab.splice(2,3,1021,2021,256);                        ///can be used to add new items to array from a specific index and also delete elements 
console.log(ab); 
            //<<<slice>>>//
let nums=[1,2,3,4,5,6]
let rt= nums.slice(3);  
let r2= nums.slice(2,4);                        ///slice out a piece from an array .It creates a new array
console.log(rt,r2);         
            /// <<</map>>>//
let arrays=[45,23,31]
let ad =arrays.map((value,index,arrays)=>{          ///creates a new array by performing operations on elements of array
    console.log(value,index,arrays)
    return value+index;
})
console.log(ad);
              // <<<filter>>>//
let num=[1,2,13,4,15,6,22,8]
let a =num.filter((a)=>{          ///filters array with values that passes the test
   return a<10;
 })
console.log(a)
           //  <<<reduce>>>//
let arr=[1,2,3,4,2,1];
let arr1=arr.reduce((h1,h2)=>{
    return h1+h2;              ///add all the elements one by one and give the one value 
})
console.log(arr1);
          // <<<<find>>>//
 let arrr=['Florin','Ivan','Liam'];
let arrr1=arrr.find(findIvan)
 function findIvan(item) {                  ///return the elements for which it finds callback func value true
    return item === 'Ivan';
 }                            
 console.log(arrr1);
       // <<<includes>>>//
let arra=['Florin','Ivan','Liam'];           ///return false or true for the value to find 
let arra1=arr.includes('Ivan');
  console.log(arra1);
       // <<<findIndex>>>// 
let numr=[1,2,3,4,5,6,7]          
 let arr5=numr.findIndex(findThree);
 function findThree(value){               //return the index of value that pass the test
 return value===3;
 }
console.log(arr5);   

       // <<<IndexOf>>>// 
let arr8=['Florin','Ivan','Liam'];         
 let arr81=arr8.indexOf('Jay');                 ///find index of element  
 arr[arr81]='Jay'
console.log(arr81 )  
     // another Example//
let arr123 = ['Florin', 'Ivan', 'Liam'];
let arr12 = arr123.indexOf('Jay');

if (arr12 === -1) { 
   console.log("absent")
} else {
        console.log("present")
}

          /// <<<LastIndexOf>>>// 
let names1=['Florin','Ivan','Liam','Ivan','Jay'];          ///find  first index starting from last of element to find 
let index=names.lastIndexOf('Ivan');

 console.log(index);
           /// <<<Array.isArray>>>// 
const names=['Florin','Ivan','Liam'];          ///find given value is array and return true or false
const str='Hello world';
const n1=17;
console.log(Array.isArray(str))
////<<<map>>/////
const product=[
        {id:1,age:25},
        {id:2,age:20},
        {id:3,age:22},
        {id:4,age:23},
        {id:5,age:28},
        {id:6,age:33},
    ]
     var d1=product.map((value, index, Array)=>
        ({[value.id]:value}))
     var d2=product.map((user)=>user.age)
    
      console.log("map "+JSON.stringify(d1))
      console.log("map "+JSON.stringify(d2))
      

