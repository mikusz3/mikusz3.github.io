document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Add custom messages when hovering over social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    const messages = {
        facebook: 'Connect with me on Facebook',
        instagram: 'Check out my Instagram',
        github: 'View my projects on GitHub',
        youtube: 'Watch my videos on YouTube'
    };

    socialIcons.forEach(icon => {
        const platform = icon.id;
        const message = messages[platform];
        
        icon.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.textContent = message;
            tooltip.className = 'tooltip';
            icon.appendChild(tooltip);
        });

        icon.addEventListener('mouseleave', () => {
            const tooltip = icon.querySelector('.tooltip');
            if (tooltip) {
                icon.removeChild(tooltip);
            }
        });
    });
});
