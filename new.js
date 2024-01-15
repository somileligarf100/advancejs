//Rest
const add_number = (a,b,c,...other) =>{
    console.log(other);
return a+b+c;
}
console.log(add_number(10,20,30,40,50,60));
//Spread
var names= ["Aja","Anu","Viv"];
const get_names = (name1,name2,name3) =>{
    console.log(name1,name2,name3);
}
get_names(...names);
//Rest With Objects
var students={
    name:"John",
    age:"28",
    hobbies:["Cricket","Singing"]
} 
const {...rest}=students;
console.log(rest);
//Spread With Objects
var new_student={
    ...students,
    age:"29"
}
console.log(new_student);
//Object Destructuring
let arr=[3,5,8,9]
let [a,b,c,d]=arr
console.log(a,b,c,d)
let [x, , ,...extra]=arr
console.log(x," ", extra)
let {u,v}={u:1,v:5}
console.log(u,v);
//Promise
let promise = new Promise(function(resolve,reject){
    resolve(56)
});

console.log("Hello One")
setTimeout(function() {
    console.log("Hello Two in 2 seconds")
},2000)
console.log("My name is " + "Hello Three")
console.log(promise)
//Promise Execution
let p1= new Promise((resolve, reject) => {
    console.log("Promise is Pending...")
    setTimeout(()=>{
        resolve(true)
    },5000)
})
let p2= new Promise((resolve, reject) => {
    console.log("Promise is Pending...")
    setTimeout(()=>{
        reject(new Error("I am an Error"))
    },5000)
})
p1.then((value) => {
    console.log(value)
})
p2.catch((error) =>{
    console.log("Some Error occurs in p2", error)
})
//Attaching Handlers
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },2000)
})
p3.then(()=>{
    console.log("Congratulations this promise is now resolved");
})
p3.then(()=>{
    console.log("Hurray");
})
//Promise API
let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
        },1000);
    });
let p5 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
            reject(new Error("Error"));
            },2000);
        });
let p6 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Value 3");
                },3000);
            });
let promise_all = Promise.allSettled([p4, p5, p6])
promise_all.then((values)=>{
    console.log(values)
})
//Async/Await
async function harry() {
let delhi_Weather = new Promise((resolve, reject) => {
setTimeout(()=>{
    resolve("27 Deg")
},1000)
})
let bangalore_Weather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("21 Deg")
},2000)
})
/*delhi_Weather.then(()=>{
    console.log(delhi_Weather);
})
bangalore_Weather.then(()=>{
    console.log(bangalore_Weather);
})*/
let delhiW=await delhi_Weather
let bangaloreW=await bangalore_Weather
return [delhiW, bangaloreW]
}
console.log("Welcome to weather control room")
let z =harry()
z.then((values)=>{
    console.log(values)
})
