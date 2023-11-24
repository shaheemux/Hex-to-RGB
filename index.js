(function() {
    // Get references to the required elements
    const hexInput = document.getElementById('hexInput');
    const convertButton = document.getElementById('convertButton');
    const resultElement = document.getElementById('result');

    // Attach event listener to the convert button
    convertButton.addEventListener('click', handleClick);

    // Function to handle the button click event
    function handleClick() {
        // Get the Hex value from the input field
        const hexValue = hexInput.value;

        // Convert Hex to RGB
        const rgbValue = hexToRgb(hexValue);

        // Display the result
        displayResult(rgbValue);
    }

    // Function to convert Hex to RGB
    function hexToRgb(hex) {
        // Remove the "#" from the beginning of the hex value
        hex = hex.replace('#', '');

        // Split the hex value into three parts (red, green, blue)
        const red = parseInt(hex.substring(0, 2), 16);
        const green = parseInt(hex.substring(2, 4), 16);
        const blue = parseInt(hex.substring(4, 6), 16);

        return `RGB(${red}, ${green}, ${blue})`;
    }

    // Function to display the result
    function displayResult(rgb) {
        resultElement.textContent = `RGB value: ${rgb}`;
    }
})();