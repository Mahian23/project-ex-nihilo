// --- CONFIGURATION ---
const VALID_USER = "Isaac Alexei";
const VALID_PASS = "1E2U3M";

// --- DOM ELEMENTS ---
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');

const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');

const notifBell = document.getElementById('notif-bell');
const leakModal = document.getElementById('leak-modal');
const closeModal = document.getElementById('close-modal');

// --- LOGIN LOGIC ---
loginBtn.addEventListener('click', () => {
    const u = usernameInput.value;
    const p = passwordInput.value;

    if (u === VALID_USER && p === VALID_PASS) {
        // Transition to Dashboard
        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');
        startTerminalEffect();
    } else {
        // Show Error & Hint
        loginError.classList.remove('hidden');
        // Gentle screen shake effect on error
        document.querySelector('.terminal-box').style.animation = "shake 0.2s ease-in-out 0s 2";
        setTimeout(() => {
            document.querySelector('.terminal-box').style.animation = "";
        }, 400);
    }
});

// --- DASHBOARD INTERACTIVITY ---
notifBell.addEventListener('click', () => {
    leakModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    leakModal.classList.add('hidden');
});

// Close modal if clicking outside the box
window.onclick = function(event) {
    if (event.target == leakModal) {
        leakModal.classList.add('hidden');
    }
}

// --- TERMINAL TYPING EFFECT ---
function startTerminalEffect() {
    const lines = document.querySelectorAll('.log-entry');
    lines.forEach((line, index) => {
        line.style.opacity = "0";
        setTimeout(() => {
            line.style.opacity = "1";
            line.style.transition = "opacity 0.5s ease-in";
        }, (index + 1) * 800); // Lines appear one by one
    });
}

// Add CSS shake animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(5px); }
        50% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
