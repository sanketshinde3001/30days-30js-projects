function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    body.classList.toggle('dark-mode');
    icon.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
}