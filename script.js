document.addEventListener("DOMContentLoaded", function() {
    const chatOutput = document.getElementById("chat-output");
    const chatInput = document.getElementById("chat-input");

    window.sendMessage = function() {
        let userMessage = chatInput.value;
        if (userMessage.trim() === "") return;
        
        // Display user message
        chatOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatInput.value = "";

        // Simulated AI response
        setTimeout(() => {
            let aiResponse = generateAIResponse(userMessage);
            chatOutput.innerHTML += `<p><strong>AI:</strong> ${aiResponse}</p>`;
            chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll
        }, 1000);
    };

    function generateAIResponse(message) {
        let lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("rent")) {
            return "I can assist with rental inquiries. What do you need help with?";
        } else if (lowerMessage.includes("maintenance")) {
            return "I can help you submit a maintenance request. Please provide details.";
        } else {
            return "I'm here to assist! Ask me anything about rental management.";
        }
    }
});

