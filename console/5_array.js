// Array
let number = [1, 2, 3, 4, 5, 9];
console.log(number);
console.log(number[0]);
console.log(number[2]);
console.log(number[4]);

// n.toString()               convert to string
let new_arr = number.toString();
console.log(new_arr);

// join()                    to join  the string 
let number2 = [11, 22, 33, 44, 55, 66, 77, 88];
let n = number2.join(" ")
console.log(n);

// pop()                     remove last element
let removed = number2.pop();
console.log(removed);

// push()                   to add something in array
let adding = number2.push(9);
console.log(number2);

// shift()                  removes first element and returns it
let firstElement = number2.shift();
console.log(firstElement);

// delete                   delete not but show empty space
let del = delete number2[1];
console.log(number2);

let number3 = [111, 222, 333];
// concat()                 to join arrays 
let combine = number.concat(number2, number3);
console.log(combine);

// reverse()
let backflow = number3.reverse();
console.log(number3)

// for each loop           it don't made new array it perform function on array
let arr = [1, 2, 3, 4, 5];
let a = arr.forEach((element) => {
    console.log(element);
    let sum = element + 3;
    console.log(sum);
});

let b = arr.forEach((element, index, array) => {
    console.log(element, index, array);
    let sum = element + 3;
    console.log(sum);
});

// map 
// it made new array so we can perform different tasks
let c = arr.map((value, index, array) => {
    console.log(value);
    console.log(value, index, array);
    return value * 2;
})
console.log(a);

// filter 
let d = arr.filter((value) => {
    return value < 3;
})
console.log(d);

// reduced 
let e = arr.reduce((n1,n2)=>{
    return n1+n2;                    
})
console.log(e);

