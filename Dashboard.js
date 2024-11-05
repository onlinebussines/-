document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get user information from the form
        const name = document.getElementById('name').value; // User's name
        const mname = document.getElementById('mname').value; // Father's name
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
        const status = document.getElementById('status').value;

        // Store the user's name and father's name in localStorage
        localStorage.setItem('fName', name); // Store user's name
        localStorage.setItem('mname', mname); // Store father's name

        // Redirect to Dashboard.html
        window.location.href = 'Dashboard.html'; // Redirect to Dashboard.html
    });
});