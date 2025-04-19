function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

document.querySelectorAll('[data-action="show-more"]').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        alert('More information coming soon!'); // Replace this with your custom action
    });
});