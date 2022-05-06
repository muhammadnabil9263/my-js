let x = 11 

let color =  x > 10 ? "red" : "blue"
console.log(color)

switch (x) {
    case  10 : 
        console.log("red")
        break;
    case  11 :
        console.log("blue")
        break;
    default:
        console.log("color is not red or blue")
        break;
}

// check if number is odd or even 
let y = 10
if ( y % 2 === 0){
    console.log("even")
}
else{
    console.log("odd")
}

let status =  y%2  ===0 ? "even" : "odd"
console.log(status)
