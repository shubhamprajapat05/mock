document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const answerInput = document.getElementById("answer");
    const nextBtn = document.getElementById("nextBtn");
    let timeLeft = 60; // Set the timer duration in seconds

    // Function to update the timer
    function updateTimer() {
        timerElement.textContent = `Timer: ${timeLeft}s`;
    }

    // Function to start the timer
    function startTimer() {
        updateTimer();
        const timerInterval = setInterval(function () {
            timeLeft--;
            updateTimer();

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                // You can handle what to do when time's up here.
            }
        }, 1000);
    }

    // Initial start of the timer
    startTimer();

    // Event listener for the Next button
    nextBtn.addEventListener("click", function () {
        // You can validate and store the answer here.
        // For simplicity, we are just moving to the next question.
        timeLeft = 60; // Reset the timer for the next question
        answerInput.value = ""; // Clear the answer input
        updateTimer();
    });
});
