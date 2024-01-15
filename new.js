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
