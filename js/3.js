let a = Math.floor(prompt("Enter your number: "));

if (isNaN(a))
    console.error("This value isn't integer");
else
    a%2 == 1 ? alert(`${a} is odd`) : alert(`${a} is even`);