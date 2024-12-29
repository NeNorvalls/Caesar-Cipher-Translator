# Caesar Cipher Translator
[view here](https://nenorvalls.github.io/Caesar-Cipher-Translator/)

This is a simple web application that implements the Caesar Cipher, a basic form of encryption.

**How it works:**
1. **Input:** The user enters text in the provided textarea and specifies a shift value (between 1 and 25).
2. **Encryption:** The JavaScript code iterates through each letter in the input text. 
   - For each letter, it calculates the new character's position by shifting its alphabetical position by the specified shift value. 
   - For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. 
3. **Output:** The encrypted text is displayed below the input area.

**Files:**
* `index.html`: Contains the HTML structure of the web page, including input fields, buttons, and the output area.
* `style.css`: Contains the CSS styles for the web page's visual presentation.
* `script.js`: Contains the JavaScript code that performs the Caesar Cipher encryption.
