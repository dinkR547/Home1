// Array to store valid results
let validResults = [];

// Function to append a new row to the results table
function appendRow(x, y, operator, result) {
    const table = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells for x, y, operator, and result
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    // Set the text content of the cells
    cell1.textContent = x;
    cell2.textContent = y;
    cell3.textContent = operator;
    cell4.textContent = result;

    // If result is a valid number, add it to the validResults array
    if (typeof result === "number") {
        validResults.push(result);
    }
}

// Function to calculate and display the summary table
function displaySummary() {
    if (validResults.length === 0) {
        document.write("<p>No valid results to display in summary.</p>");
        return;
    }

    // Calculate min, max, total, and average
    const min = Math.min(...validResults);
    const max = Math.max(...validResults);
    const total = validResults.reduce((acc, val) => acc + val, 0);
    const avg = total / validResults.length;

    // Display the summary table
    document.write("<h2>Summary Table</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}

// Function to prompt the user and calculate the result
function calculate() {
    while (true) {
        // Prompt for the first number (x)
        let x = prompt("Enter the first number (x):");
        if (x === null) {
            break; // Exit loop if "Cancel" is clicked
        }

        // Convert the input to a number and check for validity
        x = parseFloat(x);
        if (isNaN(x)) {
            appendRow('Invalid input', '', '', 'Error: Non-numeric value for x');
            continue; // Skip the rest of the loop and prompt again
        }
 // Prompt for the arithmetic operator
        let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
        if (operator === null) {
            break; // Exit loop if "Cancel" is clicked
        }
        // Prompt for the second number (y)
        let y = prompt("Enter the second number (y):");
        if (y === null) {
            break; // Exit loop if "Cancel" is clicked
        }

        // Convert the input to a number and check for validity
        y = parseFloat(y);
        if (isNaN(y)) {
            appendRow(x, 'Invalid input', '', 'Error: Non-numeric value for y');
            continue; // Skip the rest of the loop and prompt again
        }

       

        // Perform the calculation and handle invalid operators
        let result;
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                if (y === 0) {
                    result = "Error: Division by zero";
                } else {
                    result = x / y;
                }
                break;
            case "%":
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
        }

        // Append a new row to the table with the result or error message
        appendRow(x, y, operator, result);

        // Ask if the user wants to perform another calculation
        if (!confirm("Do you want to perform another calculation?")) {
            break; // Exit the loop if "Cancel" is clicked
        }
    }

    // Display the summary after the loop ends
    displaySummary();
}

// Start the calculation when the script is loaded
calculate();
