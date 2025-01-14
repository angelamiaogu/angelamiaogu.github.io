

const chatInput = document.getElementById("ChatInput");
const chatResponse = document.getElementById("ChatResponse");
const chatButton = document.getElementById("ChatButton");


const responses = {
    'hello':'Hi! how are you',
    'hi':'Hi! how are you',
    'how are you':'I am doing well, thanks for asking',
    'what is your name':'My name is Alchemy',
    'what do you do':'I am a chatbot',
    'where are you from':'I am from the internet',  
}

// Initialize a variable to store chat history
let chatHistory = '';

// Add event listener for the chat button
chatButton.addEventListener('click', () => {
    const userInput = chatInput.value.toLowerCase(); // Get user input and convert to lowercase
    let botResponse = '';

    // Add the user's input to the response
    botResponse += `You Typed: ${userInput}<br>`;

    // Check for a predefined response and add it
    if (responses[userInput]) {
        botResponse += `Alchemy says: ${responses[userInput]}`;
    } else {
        botResponse += 'Alchemy says: Sorry, I don’t understand that.';
    }

    // Update chat history with the current interaction
    chatHistory += botResponse + '<br><br>';

    // Display the updated chat history
    chatResponse.innerHTML = chatHistory;

    // Clear the chat input for the next message
    chatInput.value = '';
});
