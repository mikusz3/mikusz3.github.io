// Obsługa licznika odwiedzin
function updateVisitCounter() {
    const counterElement = document.querySelector('footer p a');
    const visits = localStorage.getItem('visitCount') || 0;
    localStorage.setItem('visitCount', parseInt(visits) + 1);
    counterElement.textContent = `Liczba odwiedzin: ${parseInt(visits) + 1}`;
}

// Obsługa formularza kontaktowego
function handleFormSubmission(event) {
    event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza
    alert('Dziękujemy za wysłanie wiadomości! Skontaktujemy się z Tobą wkrótce.');
    event.target.reset(); // Resetuje formularz
}

// Inicjalizacja
window.onload = function () {
    updateVisitCounter();

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
};
