document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Comprehensive Validation
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');

        let isValid = true;

        // Name Validation
        if (fullName.value.trim() === '') {
            displayError(fullName, 'Name is required');
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            displayError(email, 'Invalid email format');
            isValid = false;
        }

        // Phone Validation
        const phoneRegex = /^[0-9]{10,12}$/;
        if (!phoneRegex.test(phone.value)) {
            displayError(phone, 'Invalid phone number');
            isValid = false;
        }

        if (isValid) {
            alert('Registration Successful!');
            form.reset();
        }
    });

    function displayError(input, message) {
        input.classList.add('border-red-500');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
});