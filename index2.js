//promises
var add = function(x, y) {
    return new Promise((resolve,reject) => {
      var sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };
  
  var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      var sum = x - y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
  
  // Starting promise chain
  add(2,2)
    .then((added) => {

      return subtract(added, 3);
    })
    .then((subtracted) => {
      return add(subtracted, 5);
    })
    .then((added) => {
   
      return added * 2;    
    })
    .then((result) => {
      
      console.log("My result is ", result);
    })
    .catch((err) => {
   
      console.log(err);
    });



    Promise.resolve('some')
  .then(function(string) { 
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'thing';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) { 
    console.log(string); 
  });
//////async wait
function simplePromise() {
        return new Promise((resolve, reject) => {
          const isSuccess = true; 
      
          if (isSuccess) {
            resolve("Promise resolved!");
          } else {
            reject("Promise rejected!");
          }
        });
      }
      
      async function handlePromise() {
        try {
          const message = await simplePromise();
          console.log(message); 
        } catch (error) {
          console.error(error); 
        }
      }
      
      handlePromise();