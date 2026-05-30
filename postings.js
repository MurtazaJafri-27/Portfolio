document.addEventListener('DOMContentLoaded', () => {
    const message = sessionStorage.getItem('loadingMessage');
    const topSection = document.querySelector('.topSection');

    console.log('message from storage:', message);

    if (message && topSection) {
        const msgElement = document.createElement('p');
        msgElement.classList.add('loadingMessage');  // matches your CSS
        msgElement.textContent = `"${message}"`;
        topSection.appendChild(msgElement);
    }
});