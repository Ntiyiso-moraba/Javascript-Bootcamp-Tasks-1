const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
    // Stop the page from reloading when the form submits
    event.preventDefault();

    // Get all the inputs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Get the error message spaces
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let formIsValid = true;

    // Clear previous errors and red borders before checking again
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    usernameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    // Check if username is empty
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        usernameInput.style.borderColor = 'red';
        formIsValid = false;
    }

    // Validate email format using regex
    const standardPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!standardPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.style.borderColor = 'red';
        formIsValid = false;
    }

    // Check if password is long enough (min 8 characters)
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordInput.style.borderColor = 'red';
        formIsValid = false;
    }

    // If everything is fine, show success and reset the form
    if (formIsValid) {
        alert('Form submitted successfully!');
        signupForm.reset();
    }
});


// --- Countdown Timer Code ---

const resendBtn = document.getElementById('resendBtn');
let timeRemaining = 10;

// Update the button every 1 second
const countdownInterval = setInterval(function() {
    timeRemaining--;

    resendBtn.textContent = `Resend Verification (${timeRemaining}s)`;

    // When the timer hits 0, stop the interval and enable the button
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        resendBtn.removeAttribute('disabled');
        resendBtn.textContent = 'Resend Verification';
    }
}, 1000);
