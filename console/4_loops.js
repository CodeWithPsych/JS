// for loop 
let name = "arham";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

let a = 2000;
for (let j = 0; j <= a; j++) {
    // console.log(i);
    // console.log(j);
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");
//            <------------------------------------------------------------------------------------------------------------------------------------------------------->

// for in loop 
//          syntax:  for (datatype key in object){
//                          code
//                    };
let friends = ["Naqeeb", "Ali", "Urooj", "haris", "hammad"];
for(names of friends){
    console.log(`Hello `+ friends)
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const data = {
    name_0: "Arham",
    name_1: "Ali",
    name_2: "Hashim",
    name_4: "Moiz",
    name_3: "Umair",
}
for (const key in data) {
    console.log(key + ": " + data[key]);
}
// length printing
for (const key in data) {
    const value = data[key];
    console.log(`${key}:${value.length}`);
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const student = {
    FullName: "Arham Saleem",
    Address: "Model Town 'B'",
    Email: "arhammalik900@yahoo.com",
    Ph_no: "03020018887"
}

for (const info in student) {
    console.log(info + ": " + student[info].toUpperCase())
    console.log(info + ": " + student[info].toLowerCase())
}
for (const info in student) {
    console.log(`${info}: ${info.length}`)
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const number = {
    a:23,
    b:45,
    c:2323,
    d:12
}
for (const info in number){
    console.log(info);
    console.log(number[info]);
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const originalObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

for (const key in originalObject) {
    console.log(`${key.toUpperCase()} : ${originalObject[key]}`);
}

console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");
//             <------------------------------------------------------------------------------------------------------------------------------------------------------->

// for of loop
//      syntax : for(variable of iterable){
//          code
//       }
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const person = {
    name: "John",
    age: 30,
    gender: "Male"
};
for (const [key,value] of Object.entries(person)){
    console.log(`${key} : ${value}`)
}
console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------->");

const num = {
    a:23,
    b:45,
    c:2323,
    d:12
};
for(const [variable,values] of Object.entries(num)){
   console.log(`${values}`);
}
