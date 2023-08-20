        const colorSelect = document.getElementById("colorSelect");
        const removeButton = document.getElementById("removeButton");

        // Add a click event listener to the button
        removeButton.addEventListener("click", function() {
            // Get the selected option
            const selectedOption = colorSelect.options[colorSelect.selectedIndex];

            // Remove the selected option from the dropdown list
            colorSelect.removeChild(selectedOption);
        });