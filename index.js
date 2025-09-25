export function activateDarkMode() {
    const darkModeKey = 'darkMode';
    const isDarkModeActive = localStorage.getItem(darkModeKey) === 'true';

    // Toggle dark mode
    const newDarkModeStatus = !isDarkModeActive;
    document.body.classList.toggle('dark-mode', newDarkModeStatus);
    localStorage.setItem(darkModeKey, newDarkModeStatus);
}

// Activate dark mode on page load if saved
window.onload = () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};