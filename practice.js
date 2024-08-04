//Higher Order Function
function add(a,b,cd){
    let result=a+b;
    cd(result)
}
add(2,4,(res) => console.log(res))

///bind///
function abc(){

    console.log(`${this.name}`)

}
const person={
    name :"Alishba",
   
}
const d=abc.bind(person);
d();
///call///
function ab(a,b){
    console.log(`${this.name}:${a}:${b}`)

}
const person1={
    name :"Alishba",
   
}
ab.call(person1,"Hi","Hello");
///apply///
function ab(a,b){
    console.log(`${this.name}:${a}:${b}`)

}
const person2={
    name :"Alishba",
   
}
ab.apply(person2,["Hi","Hello"]);
/////program to remove duplicates
function remove(arr) {
    let arr1 = [];
     for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])){
            arr1.push(arr[i]);
        }
    }
    
  return arr1;
}

let arr2 = [1, 2, 2, 3, 4, 3, 2, 4, 5, 6];
let result2 = remove(arr2);
console.log(result2);

///program to separate odd and even numbers
function find(arr) {
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return { odd, even };
}
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result3 = find(arr3);
console.log("Odd Numbers:", result3.odd);
console.log("Even Numbers:", result3.even);


//program to find largest and smallest
function finds(arr) {
    let greatest = arr[0];
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > greatest) {
        greatest = arr[i];
      }
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return { greatest,smallest }
  }
   
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const result = finds(array);
  console.log(`Greatest: ${result.greatest}, Smallest: ${result.smallest}`);
  //program to count 
  function count(arr) {
    let counts = {};
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }
    
    let result = [];
    for (let num in counts) {
        result.push(`${num}:${counts[num]}`);
    }
    
    return result;
}
let input = [1,2,2,3,1,3,3,4,4,5,6];
let output = count(input);
console.log(output); 
//////second method
function Duplicates(arr) {
    let unique = [];
    let count = [];

    for (let i = 0; i < arr.length; i++) {
        if (unique.includes(arr[i])) {           
       let index = unique.indexOf(arr[i]);
            count[index]++;
        } else {            
            unique.push(arr[i]);
            count.push(1);
        }
    }


    let result = [];
    for (let i = 0; i < unique.length; i++) {
        result.push (`${unique[i]}:${count[i]}`);
    }

    return result;
}
let input1 = [1, 2, 2, 3, 3, 3, 4, 4, 5, 6];
let output1 = Duplicates(input);
console.log(output1); 
///promises
function simplePromise(condition) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    });
}
simplePromise(true)
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.log(error);   
    });

simplePromise(false)
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.log(error);  
    });
    /////promises second task
    function nestedPromises() {
        return new Promise((resolve, reject) => {
      
          const innerPromise = new Promise((innerResolve, innerReject) => {
         
            setTimeout(() => {
              const result = "Inner promise resolved";
              innerResolve(result);
            }, 1000);
          });
      innerPromise
            .then((result) => {
              resolve(`Outer promise resolved with: ${result}`);
            })
            .catch((error) => {
              reject(`Outer promise rejected with: ${error}`);
            });
        });
      }
      nestedPromises()
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error(error);
        });
        //local Storage
        let x=3;
        localStorage.setItems("number",x)
        let getVal=localStorage.getItem("number");   ///get 3
        console.log(getVal);
        localStorage.removeItem("number;")      //remove 3
        let getVal1=localStorage.getItem("number");  //null bcz after removing it cannot get 3
        console.log(getVal1);
       // async wait

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000); 
    });
  }
  
  async function getData() {
    try {
      console.log("Fetching data...");
      const result = await fetchData();
      console.log(result); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  getData();
  //closure
  function createCounter() {
    let count = 0; 
  
    return function() {
      count++; 
      return count;
    };
  }
  
  const counter = createCounter(); 
  
  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 
  
  