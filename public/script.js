document.addEventListener('DOMContentLoaded', function() {
    const startPlanningBtn = document.getElementById('start-planning');
    const tripButtons = document.querySelectorAll('.trip-item button');
    
    startPlanningBtn.addEventListener('click', function() {
        alert('Welcome to Travlr! Start planning your dream trip!');
    });
    
    tripButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tripName = this.parentElement.querySelector('h3').textContent;
            alert(`Viewing details for: ${tripName}`);
        });
    });
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});