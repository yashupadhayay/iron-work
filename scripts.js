document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
});