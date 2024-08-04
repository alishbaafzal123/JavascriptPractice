              //push//////
let num=[1,2,3,34,4]
let r= num.push(56)            //add elements at last and returns new length
console.log(num,r);
            ///////// pop////////////
let num=[1,2,3,34,4]
let r= num.pop()                ///remove last element of array
console.log(num,r);
         ////////////join/////////////////
let num=[1,2,3,34,4]
let r= num.join("-")                ///join all elements with a separator
console.log(num,r);
          //////////shift////////////////
let num=[1,2,3,34,4]
let r= num.shift();               ///remove first element and return it
console.log(num,r);
            ///////unshift/////////////
let num=[1,2,3,34,4]
let r= num.unshift(78);               ///Add new element at the start and return new length
console.log(num,r);
               /////concat////////
let num=[1,2,3,34,4]
let num1=[5,6,7,8]
let num2=[8,10]
 let r= num.concat(num1,num2);               ///Join 2 or more arrays and then return them after joining while original array remain same
 console.log(num,num2,r);     
               //////sort/////
let num=[22,53,3,66,14,8,71]
let r= num.sort();               ///sort the elements in alphabetial order
 console.log(num);  
       /// in ascending and descending order////      
let num=[22,53,3,66,14,8,71]
let compare=(a,b)=>{
    return a-b;
}
let r= num.sort(compare);               ///sort the elements in (b-a)ascending and (a-b)descending order and return in order form 
 console.log(num,r); 
              /// <<<reverse>>>//
 let num=[1,2,3,34,4]
let r= num.reverse();                        ///reverse the the order of elements
console.log(num);                    
           /// <<<splice>>>//
let num=[1,2,3,34,4]
let r= num.splice(2,3,1021,2021,256);                        ///can be used to add new items to array from a specific index and also delete elements 
console.log(num); 
            //<<<slice>>>//
let num=[1,2,3,4,5,6]
let r= num.slice(3);  
let r2= num.slice(2,4);                        ///slice out a piece from an array .It creates a new array
console.log(r,r2);         
            /// <<</map>>>//
let arr=[45,23,31]
let a =arr.map((value,index,array)=>{          ///creates a new array by performing operations on elements of array
    console.log(value,index,array)
    return value+index;
})
console.log(a);
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
 let arr=['Florin','Ivan','Liam'];
let arr1=arr.find(findIvan)
 function findIvan(item) {                  ///return the elements for which it finds callback func value true
    return item === 'Ivan';
 }                            
 console.log(arr1);
       // <<<includes>>>//
let arr=['Florin','Ivan','Liam'];           ///return false or true for the value to find 
let arr1=arr.includes('Ivan');
  console.log(arr1);
       // <<<findIndex>>>// 
let num=[1,2,3,4,5,6,7]          
 let arr1=num.findIndex(findThree);
 function findThree(value){               //return the index of value that pass the test
 return value===3;
 }
console.log(arr1);   

       // <<<IndexOf>>>// 
let arr=['Florin','Ivan','Liam'];         
 let arr1=arr.indexOf('Jay');                 ///find index of element  
 arr[arr1]='Jay'
console.log(arr1 )  
     // another Example//
let arr = ['Florin', 'Ivan', 'Liam'];
let arr1 = arr.indexOf('Jay');

if (arr1 === -1) { 
   console.log("absent")
} else {
        console.log("present")
}

          /// <<<LastIndexOf>>>// 
let names=['Florin','Ivan','Liam','Ivan','Jay'];          ///find  first index starting from last of element to find 
let index=names.lastIndexOf('Ivan');

 console.log(index);
           /// <<<Array.isArray>>>// 
const names=['Florin','Ivan','Liam'];          ///find given value is array and return true or false
const str='Hello world';
const num=17;
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
      

