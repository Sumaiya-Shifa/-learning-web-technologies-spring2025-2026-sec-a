// Select display input
let display = document.getElementById("display");

// Select all calculator buttons
let buttons = document.querySelectorAll(".buttons input");

// Add click event to each button
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = this.value;

        // If "=" pressed
        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }

        // If "C" pressed
        else if (value === "C") {
            display.value = "";
        }

        // For numbers and operators
        else {
            display.value += value;
        }

    });

});