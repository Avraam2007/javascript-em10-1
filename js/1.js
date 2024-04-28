let a = Math.floor(prompt("Enter first number: "));
let b = Math.floor(prompt("Enter second number: "));

if (isNaN(a) || isNaN(b)){
    console.error("One of this numbers is not integer");
}
else {
    if (a > b) {
        alert(`${a} is bigger than ${b}`);
    }
    
    else if (a < b) {
        alert(`${b} is bigger than ${a}`);
    }
    
    else {
        alert(`${b} = ${a}`);
    }
}
