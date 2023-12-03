document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('CS-Student');
    const text = 'CS Student';
    let index = 0;

    function typeOut() {
        if (index < text.length) {
            target.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeOut, 150); // The speed of typing, in milliseconds
        }
    }

    typeOut(); // Start the typing effect
});
