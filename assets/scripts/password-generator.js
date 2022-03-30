function generatePassword()
{
    var passwordLength;

    passwordLength = window.prompt("Enter the length of your password:\nNote: length must be between 8 and 128 characters");
    window.alert("Password length entered is: " + passwordLength);
    window.alert("Random number chosen is: " + Math.random());
    return "TODO: Generate Password";
}