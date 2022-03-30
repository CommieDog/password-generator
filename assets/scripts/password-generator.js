function generatePassword()
{
    var passwordLength;
    var passwordCharAtlas = [];

    passwordLength = window.prompt("Enter the length of your password:\nNote: length must be between 8 and 128 characters");
    passwordLength = Number.parseInt(passwordLength);
    if(! verifyPasswordLength())
    {
        return; // Can't do anything else without a password length
    }

    populatePasswordCharAtlas();
    if(! validatePasswordCharAtlas())
    {
        return; // Can't do anything else without at some possible password characters either
    }
    
    return buildPassword();

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

    function populatePasswordCharAtlas()
    {
        const lowercaseAtlas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const uppercaseAtlas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const numeralAtlas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        const specialCharAtlas = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

        if(window.confirm("Should the password contain lowercase letters?\nOK for yes, Cancel for no"))
        {
            passwordCharAtlas = passwordCharAtlas.concat(lowercaseAtlas);
        }
        if(window.confirm("Should the password contain uppercase letters?\nOK for yes, Cancel for no"))
        {
            passwordCharAtlas = passwordCharAtlas.concat(uppercaseAtlas);
        }
        if(window.confirm("Should the password contain numerals?\nOK for yes, Cancel for no"))
        {
            passwordCharAtlas = passwordCharAtlas.concat(numeralAtlas);
        }
        if(window.confirm("Should the password contain special characters?\nOK for yes, Cancel for no"))
        {
            passwordCharAtlas = passwordCharAtlas.concat(specialCharAtlas);
        }
    }

    function validatePasswordCharAtlas()
    {
        var isValid = passwordCharAtlas.length > 0;
        if(!isValid)
        {
            window.alert("At least one set of characters must be chosen.\nTry again.");
        }
        return isValid;
    }

    function buildPassword()
    {
        var password = "";

        for(var i = 0; i < passwordLength; i++)
        {
            password = password.concat(getRandomPasswordChar());
        }
        return password;

        function getRandomPasswordChar()
        {
            return "*"
        }
    }
}