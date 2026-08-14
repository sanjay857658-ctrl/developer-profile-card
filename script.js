// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Form Validation & Submit
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Password Validation
    if (!password.value.trim()) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    
    if (isValid) {
        // Success Animation
        const btn = document.querySelector('.login-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
        btn.style.opacity = '0.8';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Welcome Back!';
            btn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
            
            setTimeout(() => {
                alert('✅ Login Successful!\nWelcome back, Sanjay!');
                btn.innerHTML = '<span>Sign In</span> <i class="fas fa-arrow-right"></i>';
                btn.style.opacity = '1';
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                document.getElementById('loginForm').reset();
            }, 2000);
        }, 2000);
    }
}

// Live Validation on Input
document.getElementById('email').addEventListener('input', function() {
    const error = document.getElementById('emailError');
    if (this.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
        error.textContent = 'Invalid email format';
    } else {
        error.textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const error = document.getElementById('passwordError');
    if (this.value && this.value.length < 6) {
        error.textContent = 'Minimum 6 characters required';
    } else {
        error.textContent = '';
    }
});

// Enter key support
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.querySelector('.login-btn').click();
        }
    });
});
