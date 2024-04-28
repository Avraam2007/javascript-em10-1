let year = Math.floor(prompt("Enter your number: "));

if (isNaN(year)){
    console.error("This value isn't integer");
}
else {
    if ((year % 100 == 0 && year % 400 != 0) || year % 4 != 0){
        alert(`${year} year isn't leap`);
    }
    else {
        alert(`${year} year is leap`);
    }
}