// Get references to the HTML elements
const myTextarea = document.getElementById('myTextarea');
const countDisplay = document.getElementById('count');

// Add an event listener for the 'input' event
myTextarea.addEventListener('input', function() {
    // Get the current text from the textarea
    const text = myTextarea.value;
    
    // Get the length of the text (number of characters)
    const characterCount = text.length;
    
    // Update the character count on the webpage
    countDisplay.textContent = characterCount;
});