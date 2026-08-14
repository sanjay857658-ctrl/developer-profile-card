// ====== NAVBAR - HAMBURGER MENU ======
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ====== NAVBAR - SCROLL EFFECT ======
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
    }
});

// ====== ACTIVE NAV LINK ======
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ====== DARK/LIGHT THEME TOGGLE ======
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// ====== LOAD SAVED THEME ======
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// ====== LOGOUT FUNCTION ======
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Show logout animation
        const btn = document.querySelector('.logout-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
}

// ====== CONTACT FORM ======
function sendMessage(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.opacity = '1';
            event.target.reset();
            alert('✅ Your message has been sent successfully!');
        }, 2000);
    }, 2000);
}

// ====== SKILLS ANIMATION - ON SCROLL ======
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            const width = progress.style.width;
            progress.style.width = '0%';
            
            setTimeout(() => {
                progress.style.width = width;
            }, 200);
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    observer.observe(item);
});

// ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====== KEYBOARD SHORTCUT - ESC TO CLOSE MENU ======
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('navLinks').classList.remove('active');
    }
});

// ====== CONSOLE WELCOME ======
console.log('%c🚀 Sanjay.dev - Home Page', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript', 'font-size: 14px; color: #718096;');
