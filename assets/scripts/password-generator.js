function generatePassword()
{
    var passwordLength;

    passwordLength = window.prompt("Enter the length of your password:\nNote: length must be between 8 and 128 characters");
    passwordLength = Number.parseInt(passwordLength);
    if(!verifyPasswordLength())
    {
        return; // Can't do anything else without a password length
    }
    
    window.alert("Random number chosen is: " + Math.random());
    return "TODO: Generate Password";

    function verifyPasswordLength()
    {
        return isPasswordLengthNumber() && isPasswordLengthMinimum() && isPasswordLengthMaximum();
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

    function isPasswordLengthMinimum()
    {
        var isValid = passwordLength >= 8;
        if(!isValid)
        {
            window.alert("Password length must be at least 8.\nTry again.");
        }
        return isValid;
    }

    function isPasswordLengthMaximum()
    {
        var isValid = passwordLength <= 128;
        if(!isValid)
        {
            window.alert("Password length must be no more than 128.\nTry again.");
        }
        return isValid;
    }
}