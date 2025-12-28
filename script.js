// script.js
// Handles toggle button state, persistence via localStorage, and optional API call.

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleBtn');
    const storedState = localStorage.getItem('botState');
    const isOn = storedState === 'on';
    updateButton(isOn);

    btn.addEventListener('click', () => {
        const newState = btn.dataset.state === 'on' ? false : true;
        // Update UI and storage
        updateButton(newState);
        // Optional: send request to backend (placeholder URL)
        // fetch('https://example.com/api/bot', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ state: newState ? 'on' : 'off' })
        // }).catch(console.error);
    });
});

function updateButton(isOn) {
    const btn = document.getElementById('toggleBtn');
    if (isOn) {
        btn.textContent = 'Encendido';
        btn.classList.remove('off');
        btn.classList.add('on');
        btn.dataset.state = 'on';
        localStorage.setItem('botState', 'on');
    } else {
        btn.textContent = 'Apagado';
        btn.classList.remove('on');
        btn.classList.add('off');
        btn.dataset.state = 'off';
        localStorage.setItem('botState', 'off');
    }
}
