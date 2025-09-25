export function activateDarkMode() {
    const darkModeKey = 'darkMode';
    const isDarkMode = localStorage.getItem(darkModeKey) === 'true';

    // Toggle dark mode
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem(darkModeKey, !isDarkMode);
}

// Activate dark mode on page load if saved
window.onload = () => {
    if(localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};