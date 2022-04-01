# Password Generator

A webpage that generates random passwords based on user input


## Introduction 

This project is a tech demo of basic JavaScript functionality and a relief for those who can't come up with strong passwords on their own. It consists of a simple website with basic styling that invites the user to press a button in order to generate a password. The website prompts the user to enter a few basic parameters and displays the resulting password for the user to write down (or try to commit to memory only to forget at an inconvienient time).

![Screenshot of final product.](https://github.com/CommieDog/password-generator/blob/main/assets/images/readme/password-generator-website-screenshot.jpg)

A sample deployment of the website is available on [GitHub Pages](https://commiedog.github.io/password-generator/).


## Table of Contents

* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Future Work](#future-work)
* [Author](#author)
* [License](#license)


## Description

Upon opening the webpage, the user is greeted with a minimal presentation; the only feature of note is a red button labelled "Generate Password". Pressing the button brings up a dialog prompt asking the user to specify a password length. If the user enters a number that meets both the minimum and maximum length requirements, the website then moves on to four yes/no prompts asking the user if lowercase letters, uppercase letters, numerals, and special characters should be included. If the user says "yes" to at least one of these prompts, the website will then produce a password string of random characters meeting all of the user requirements. The password is displayed inside a text field located above the button.

The "meat" of the website is contained within the `generatePassword()` function. The function begins by collecting user input, starting with password length. If the user tries to input a number outside of the acceptable length range or non-numerical input, the function will inform the user of its inability to continue and abort. Next, the function collects user input for the character set or sets to use for the password. If the user says "no" to all possible character sets, the function will again tell the user that it cannot continue and abort. If the user enters valid password criteria, the function will build an array of all acceptable characters and randomly select one based on its index and add it to the password string until it matches the user's requested length. That functionality, encapsulated in `buildPassword()`, is shown below:
```JavaScript
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
```


## Features

* Use of `alert()`, `confirm()`, and `prompt()` for user interactivity
* Generate passwords of varied lengths
* Generate passwords from different characters to balance ease of memorization against need for complexity
* Immediate validation of user input to minimize wasting users' time
* Use of built-in JavaScript `Math` methods


## Technologies Used

* HTML
* CSS
* JavaScript


## Future Work

The current method of user interface (dialog boxes) can be cumbersome, particularly if the user wants a series of passwords with the same paramaters. A persistent form layout displaying parameters would make entering new parameters easier, elimiate the need for repetition, and make the webpage a bit more visually appealing as well.


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)

## License
&copy; 2022 John Netzel. All Rights Reserved.