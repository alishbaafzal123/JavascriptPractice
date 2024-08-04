var a="Javascript"
////lenght////
console.log(a.length)
/////toLowerCase///
console.log(a.toLowerCase())
/////toUpperCase///
console.log(a.toUpperCase())
    ///repeat///
console.log(a.repeat(3))
//////padStart///
console.log(a.padStart(15,0))
////padEnd///
console.log(a.padEnd(14,2))
////replace
console.log(a.replace("a","b"))
console.log(a.replace(/a/g,"b"))
///search///
console.log(a.search("script"))      //give index 
///includes////
console.log(a.includes("script"))
///startswith///
console.log(a.startsWith("script"))
///endswith///
console.log(a.endsWith("script"))
///match///
console.log(a.match(/a/g))
//indexOf///
console.log(a.indexOf("c"))
var d="Javacsript is good is language"
///LastIndexOf///
console.log(d.lastIndexOf("is"))
///CharAt////
console.log(d.charAt(6))
///CharCodeAt///
console.log(d.charCodeAt(1))
///Split///
console.log(d.split(" "))
////slice/////
console.log(a.slice(3))
console.log(a.slice(3,5))
////substr////
console.log(a.substr(3))
console.log(a.substr(3,5))
//////substring///
console.log(a.substring(3))
console.log(a.substring(3,5))
///concat////
var c=" language"
console.log(a.concat(c))
var b="     java  "
////trim///
console.log(b.trim())
///toString///
var str=50;
console.log(str.toString())
////for in///
const obj={
    name:"john",
    age:40,
    occupation:"programming"
}
for(let key in obj){
    console.log(obj[key]);

}