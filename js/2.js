let password = prompt("Enter your password: ");

if(password.length < 8) {
    alert("The password is too short");
}

else if(password.length > 16) {
    alert("The password is too long");
}

else{
    alert(`Your password: ${"*".repeat(password.length)}`);
}