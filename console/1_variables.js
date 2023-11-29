var a = 5;
let b = 200;
const arham = "saleem";
b = 14;

// arham = "hye";        // const not change
console.log(arham)
console.log(a)
console.log(b)

// Datatypes: 
// null
// Number
// String
// Symbol
// undefined
// boolean
// BigInt


let c = null;
console.log(c);

let d = undefined;
console.log(d);


// adding number in variable 
let str = "Arham ";
let number = 23;
let result = str + number;
console.log(result);

// type of object 
const obj = {
    name: "Arham",
    name1: "Ali",
    name2: "Moiz",
    name3: "Hashim",
    name4: "Umair",
};
console.log(obj);
let arr = [2, 3, 4, 5, 6];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(typeof obj);
console.log(typeof arr);

// function getting data using id 
const second = {
    "name0": "Arham",
    "name1": "Ali",
    "name2": "Moiz",
    "name3": "Hashim",
    "name4": "Umair",
};
const creatingid = (id) => {
    const propertyName=`name${id}`
    return second[propertyName];
};
console.log(creatingid(0));
console.log(creatingid(1));
console.log(creatingid(2));
console.log(creatingid(3));
console.log(creatingid(4));

// slicing 
let name = "arham";
for (let i=0; i < name.length; i++){
    console.log(name[i]);
}