function generatePassword()
{
    var passwordLength;

    passwordLength = window.prompt("Enter the length of your password:\nNote: length must be between 8 and 128 characters");
    passwordLength = Number.parseInt(passwordLength);
    if(!verifyPasswordLength())
        return; // Can't do anything else without a password length
    window.alert("Password length entered is: " + passwordLength);
    window.alert("Random number chosen is: " + Math.random());
    return "TODO: Generate Password";

    function verifyPasswordLength()
    {
        return isPasswordLengthNumber();
    }

    function isPasswordLengthNumber()
    {
        var isValid = Number.isSafeInteger(passwordLength);
        if(!isValid)
        {
            window.alert("Password length must be a number.\nTry again.");
        }
        return isValid;
    }
}