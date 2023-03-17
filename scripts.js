// Smooth scrolling for navigation menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let hasError = false;

    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        hasError = true;
    } else {
        nameError.style.display = 'none';
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        hasError = true;
    } else {
        emailError.style.display = 'none';
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        hasError = true;
    } else {
        messageError.style.display = 'none';
    }

    if (!hasError) {
        // Process the form submission, e.g., send an email or save to a database.
    }
});

// Mobile navigation toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
