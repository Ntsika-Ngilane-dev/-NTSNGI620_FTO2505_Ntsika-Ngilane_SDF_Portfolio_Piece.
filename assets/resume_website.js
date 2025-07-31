// Add smooth scrolling and interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add hover effects to tool icons
    const toolIcons = document.querySelectorAll('.tool-icon');
    toolIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillProgress 1.5s ease-out forwards';
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // Add CSS animation for progress bars
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fillProgress {
            from {
                width: 0%;
            }
            to {
                width: var(--target-width, 100%);
            }
        }
    `;
    document.head.appendChild(style);

    // Set custom properties for each progress bar
    document.querySelector('.progress-90').style.setProperty('--target-width', '90%');
    document.querySelector('.progress-75').style.setProperty('--target-width', '75%');
    document.querySelector('.progress-40').style.setProperty('--target-width', '40%');
    document.querySelector('.progress-60').style.setProperty('--target-width', '60%');
});
