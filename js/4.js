let year = Math.floor(prompt("Enter your year: "));

if (isNaN(year))
    console.error("This value isn't integer");
else
    ((year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) ? alert(`${year} year isn't leap`) : alert(`${year} year is leap`);