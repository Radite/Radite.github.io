document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('CS-Student');
    const texts = ['CS Student', 'ML Enthusiast', 'Microsoft SWE Intern'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Delete text
            target.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            // When deletion is complete
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Move to next text
                setTimeout(typeEffect, 500); // Pause before typing next text
                return;
            }
            
            setTimeout(typeEffect, 75); // Deletion speed
        } else {
            // Type text
            target.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            // When typing is complete
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 500); // Pause before deleting
                return;
            }
            
            setTimeout(typeEffect, 150); // Typing speed
        }
    }
    
    typeEffect(); // Start the typing effect
});