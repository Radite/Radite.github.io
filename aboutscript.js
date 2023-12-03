function showTechStack() {
    document.querySelector('.tools').classList.remove('active');
    document.querySelector('.tech-stack').classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('.tab:nth-child(1)').classList.add('active');
}

function showTools() {
    document.querySelector('.tech-stack').classList.remove('active');
    document.querySelector('.tools').classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('.tab:nth-child(2)').classList.add('active');
}

// Initialize the first tab open
showTechStack();
