export function activateDarkMode() {
    const darkModeKey = 'darkMode';
    const isDarkModeActive = localStorage.getItem(darkModeKey) === 'true';

    // Toggle dark mode
    document.body.classList.toggle('dark-mode', !isDarkModeActive);
    localStorage.setItem(darkModeKey, !isDarkModeActive);
}

// Activate dark mode on page load if saved
window.onload = () => {
    const darkModeKey = 'darkMode';
    if(localStorage.getItem(darkModeKey) === 'true') {
        document.body.classList.add('dark-mode');
    }
};