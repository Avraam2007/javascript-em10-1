const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Enter your password: ", (password) => {
    if(password.length < 8)
        console.log("The password is too short");
    else if(password.length > 16)
        console.log("The password is too long");
    else
        console.log(`Your password: ${"*".repeat(password.length)}`);
      readline.close();
    });