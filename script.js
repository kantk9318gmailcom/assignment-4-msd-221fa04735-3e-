document.addEventListener('DOMContentLoaded', (event) => {
    const generateButton = document.getElementById('generateButton');
    const resultDisplay = document.getElementById('result');
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');

    generateButton.addEventListener('click', () => {
        // Get values from input boxes
        const minValue = parseInt(minValueInput.value, 10);
        const maxValue = parseInt(maxValueInput.value, 10);

        // Validate inputs
        if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
            resultDisplay.textContent = 'Please enter valid minimum and maximum values.';
            return;
        }

        // Generate random number between minValue and maxValue (inclusive)
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        // Display the result
        resultDisplay.textContent = `Generated Number: ${randomNumber}`;
    });
});
