let a = Math.floor(prompt("Enter your number: "));

if (isNaN(a)){
    console.error("This value isn't integer");
}
else {
    if (a % 2 == 1) {
        alert(`${a} is odd`);
    }
    else {
        alert(`${a} is even`);
    }
}