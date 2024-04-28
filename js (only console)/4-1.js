const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Enter your year: ", (year) => {
    year = Math.floor(year);
    if (isNaN(year)){
        console.error("This value isn't integer");
    }
    else {
        if ((year % 100 == 0 && year % 400 != 0) || year % 4 != 0){
            console.log(`${year} year isn't leap`);
        }
        else {
            console.log(`${year} year is leap`);
        }
    }
      readline.close();
    });