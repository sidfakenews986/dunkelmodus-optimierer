export function activateDarkMode() {
    // Check if dark mode is already enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Toggle dark mode
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

// Activate dark mode on page load if saved
window.onload = () => {
    if(localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};