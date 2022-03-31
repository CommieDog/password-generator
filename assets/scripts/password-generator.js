/**
 * Collects all parameters necessary to generate a password from dialog boxes presented to the user and generates a random password conforming to that input
 * @returns a string suitable for use as a password
 */
function generatePassword()
{
    var passwordLength;
    var passwordCharAtlas = [];

    getPasswordLengthFromUser()
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

    /**
     * Asks the user for the desired password length via a browser pop-up window
     */
    function getPasswordLengthFromUser()
    {
        passwordLength = window.prompt("Enter the length of your password:\nNote: length must be between 8 and 128 characters");
        passwordLength = Number.parseInt(passwordLength);
    }

    /**
     * Verifies the user's desired password length against the constraints called for in the design
     * @returns true if the password length is a valid value, false otherwise
     */
    function verifyPasswordLength()
    {
        return isPasswordLengthNumber() && isPasswordLengthMinimum() && isPasswordLengthMaximum();

        /**
         * Verifies the user's desired password length against the requirement that it be a number
         * @returns true if the password length is a number, false otherwise
         */
        function isPasswordLengthNumber()
        {
            isValid = Number.isSafeInteger(passwordLength);
            if(!isValid)
            {
                window.alert("Password length must be a number.\nTry again.");
            }
            return isValid;
        }

        /**
         * Verifies the user's desired password length against the requirement that it be at least 8 characters long
         * @returns true if the password length is at least 8 characters, false otherwise
         */
        function isPasswordLengthMinimum()
        {
            isValid = passwordLength >= 8;
            if(!isValid)
            {
                window.alert("Password length must be at least 8.\nTry again.");
            }
            return isValid;
        }

        /**
         * Verifies the user's desired password length against the requirement that it be at most 128 characters long
         * @returns true if the password length is at most 128 characters, false otherwise
         */
        function isPasswordLengthMaximum()
        {
            isValid = passwordLength <= 128;
            if(!isValid)
            {
                window.alert("Password length must be no more than 128.\nTry again.");
            }
            return isValid;
        }
    }

    /**
     * Asks the user for the desired character set(s) to use to generate the password via browser windows
     */
    function populatePasswordCharAtlas()
    {
        // These 4 arrays hold all possible password characters and are grouped so users can select some sets and exclude others
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

    /**
     * Verifies the user's desired password character set(s) against the requirement that it use at least one character set
     * @returns true if the password has at least one available character to draw from, false otherwise
     */
    function validatePasswordCharAtlas()
    {
        isValid = passwordCharAtlas.length > 0;
        if(!isValid)
        {
            window.alert("At least one set of characters must be chosen.\nTry again.");
        }
        return isValid;
    }

    /**
     * Constructs a randomly-generated password string based on previous user input.
     * @returns a password meeting the user's specified criteria
     */
    function buildPassword()
    {
        password = "";

        for(i = 0; i < passwordLength; i++)
        {
            password = password.concat(getRandomPasswordChar()); // Build the password one character at a time
        }
        return password;

        /**
         * Selects a random character that meets the user's character set rquirement input
         * @returns a single-character string
         */
        function getRandomPasswordChar()
        {
            index = Math.random() * passwordCharAtlas.length; // potential values range from 0 (inclusive) to passwordLength (exclusive)
            index = Math.floor(index); // Math.round(index) would produce an uneven distribution of potential indexes
            return passwordCharAtlas[index];
        }
    }
}