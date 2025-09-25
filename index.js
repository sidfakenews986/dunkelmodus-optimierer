export function activateDarkMode() {
    // Überprüfen, ob der Dunkelmodus bereits aktiviert ist
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Dunkelmodus aktivieren/deaktivieren
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

// Standardmäßig den Dunkelmodus beim Laden der Seite aktivieren, falls gespeichert
window.onload = () => {
    if(localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};
