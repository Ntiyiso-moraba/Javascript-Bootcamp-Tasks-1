// Listen for the submit button click
document.getElementById('gradingForm').addEventListener('submit', function(event) {
    
    // Stop the page from reloading
    event.preventDefault();

    // Get the values from the input fields
    var studentName = document.getElementById('nameInput').value;
    var studentMark = document.getElementById('markInput').value;
    
    // Convert mark from text to a number
    var mark = Number(studentMark);

    // Create variables to hold our calculations
    var finalResult = "";
    var finalGrade = "";

    // Basic if/else logic using the task guidelines
    if (mark >= 80 && mark <= 100) {
        finalResult = "PASS";
        finalGrade = "Distinction";
    } 
    else if (mark >= 65 && mark <= 79) {
        finalResult = "PASS";
        finalGrade = "Merit";
    } 
    else if (mark >= 50 && mark <= 64) {
        finalResult = "PASS";
        finalGrade = "Pass";
    } 
    else {
        finalResult = "FAIL";
        finalGrade = "Fail";
    }

    // Show the instant message on the screen
    var messageBox = document.getElementById('displayMessage');
    messageBox.innerHTML = studentName + " got " + mark + "%. Result: " + finalResult + " (" + finalGrade + ")";

    // Add a new row to the table at the bottom
    var table = document.getElementById('resultsTable');
    var row = table.insertRow(-1); // adds row to the bottom

    // Insert columns into the new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Put data inside the columns
    cell1.innerHTML = studentName;
    cell2.innerHTML = mark;
    cell3.innerHTML = finalResult;
    cell4.innerHTML = finalGrade;

    // Clear the form fields for the next input
    document.getElementById('nameInput').value = "";
    document.getElementById('markInput').value = "";
});