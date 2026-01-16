let userName = null;
let messages = [];

document.addEventListener("DOMContentLoaded", function() {
    welcomeMessage();
});

function welcomeMessage() {
    if (!userName) {
        let userResponse = prompt("Please enter your name:");
        if (!userResponse) {
            userResponse = "Guest";
        }
        userName = userResponse;
    }
    document.getElementById("Welcome-speech").innerText = `Welcome, ${userName}! to Dika Company`;
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    
    // Add message to array
    messages.push({ name, email, message });
    
    // Add row to table
    const tableBody = document.getElementById("messageTable");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td class="border border-gray-300 p-2">${name}</td>
        <td class="border border-gray-300 p-2">${email}</td>
        <td class="border border-gray-300 p-2">${message}</td>
    `;
    
    alert("Form submitted successfully!");
    
    // Clear form
    document.querySelector("form").reset();
    
    return true;
}

function showAlert() {
    alert("Thank you for visiting our portfolio!");
}