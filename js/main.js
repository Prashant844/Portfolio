// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-categories').includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            if (fullname === '') {
                isValid = false;
                showError('fullname', 'Please enter your name');
            } else {
                removeError('fullname');
            }
            
            if (email === '') {
                isValid = false;
                showError('email', 'Please enter your email');
            } else if (!isValidEmail(email)) {
                isValid = false;
                showError('email', 'Please enter a valid email');
            } else {
                removeError('email');
            }
            
            if (message === '') {
                isValid = false;
                showError('message', 'Please enter your message');
            } else {
                removeError('message');
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper functions for form validation
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        
        // Remove any existing error message
        removeError(fieldId);
        
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#dc3545';
    }
    
    function removeError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentNode.querySelector('.error-message');
        
        if (errorDiv) {
            errorDiv.remove();
        }
        
        field.style.borderColor = '';
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Check URL parameters for form submission status
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');
    
    if (status === 'success') {
        const contactSection = document.getElementById('contact');
        const formContainer = contactSection.querySelector('.contact-form-container');
        
        const successMessage = document.createElement('div');
        successMessage.className = 'status-message success-message';
        successMessage.innerText = 'Thank you for your message. We\'ll get back to you soon!';
        
        formContainer.insertBefore(successMessage, formContainer.firstChild);
        
        // Remove the message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    } else if (status === 'error') {
        const contactSection = document.getElementById('contact');
        const formContainer = contactSection.querySelector('.contact-form-container');
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'status-message error-message';
        
        if (message) {
            errorMessage.innerText = decodeURIComponent(message);
        } else {
            errorMessage.innerText = 'Sorry, there was an error sending your message. Please try again later.';
        }
        
        formContainer.insertBefore(errorMessage, formContainer.firstChild);
        
        // Remove the message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }
});