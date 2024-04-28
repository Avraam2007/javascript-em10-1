const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Enter first number: ", (a) => {
    a = Math.floor(a);
    readline.question("Enter second number: ", (b) => {
        b = Math.floor(b);
        if (isNaN(a) || isNaN(b))
            console.error("One of this numbers is not integer");
        else {
            if (a > b)
                console.log(`${a} is bigger than ${b}`);
            else if (a < b)
                console.log(`${b} is bigger than ${a}`);
            else
                console.log(`${b} = ${a}`);
    }
      readline.close();
    });
  });