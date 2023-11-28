// if 
let psych = "arham";
if (psych === "arham") {
    console.log(psych);
}

// else if 
if (psych === "arham") {
    console.log(psych);
}
else {
    console.log("Invalid")
}

// if else if 
let a = 3;
if (a <= 3) {
    console.log("milk");
}
else if (a > 3 && a <= 4) {
    console.log("cold drink");
}
else if (a == 3) {
    console.log("Energy drink");
}
else {
    console.log(" ");
}

// switch statement 
let arham = "web";
switch (arham) {
    case "software":
        console.log("Invalid")
        break;
    case "web":
        console.log("MERN stack Developer")
        break;
    default:
        console.log("Invalid")
        break;
}

// practise 
let n = 4;
let i=0;
while (i != 3) {
    i=prompt("Enter a number");
    i=parseInt(i);
}
console.log("the number is correct")