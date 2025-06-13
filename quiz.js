// Function to check the answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        const feedback = document.getElementById('feedback');
        
        // Compare answers
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // No answer selected
        const feedback = document.getElementById('feedback');
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
