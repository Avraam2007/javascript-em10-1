const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Enter your number: ", (numb) => {
    numb = Math.floor(numb);
    if (isNaN(numb))
        console.error("This value isn't integer");
    else
        numb%2 == 1 ? console.log(`${numb} is odd`) : console.log(`${numb} is even`);
      readline.close();
    });