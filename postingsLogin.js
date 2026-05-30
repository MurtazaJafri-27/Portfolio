document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const passInput = document.getElementById('passInput');
    const messageInput = document.getElementById('messageInput');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async () => {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passInput').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log('response:', data);

            if (data.success) {
                sessionStorage.setItem('loadingMessage', messageInput.value);
                console.log('stored:', sessionStorage.getItem('loadingMessage'));
                window.location.href = 'postings.html';
            } else {
                alert(data.message);
            }

        } catch (err) {
            console.error('fetch failed:', err);
        }
    });

}); // <-- make sure this closing bracket is here