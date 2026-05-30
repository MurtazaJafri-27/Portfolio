import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
    'https://lpwbvrezoegkmqtrlquy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2J2cmV6b2Vna21xdHJscXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDM4NzksImV4cCI6MjA5NTcxOTg3OX0.lv2MJeU9bGa_eR6fsoovFZbHle7wRbh-kZCfTUlgnNU'
)

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const passInput = document.getElementById('passInput');
    const messageInput = document.getElementById('messageInput');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async () => {
        const email = emailInput.value;
        const password = passInput.value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            alert('Wrong email or password.');
            console.error(error);
        } else {
            sessionStorage.setItem('isAdmin', 'true');
            sessionStorage.setItem('loadingMessage', messageInput.value);
            window.location.href = 'postings.html';
        }
    });
});