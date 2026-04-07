// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', next);
    });
}

// ===== Lotto Generator =====
const numbersDisplay = document.getElementById('numbers-display');
const generateBtn = document.getElementById('generate');

const ballColors = [
    { max: 10, cls: 'ball-yellow' },
    { max: 20, cls: 'ball-blue' },
    { max: 30, cls: 'ball-red' },
    { max: 40, cls: 'ball-gray' },
    { max: 45, cls: 'ball-green' },
];

function getBallColor(n) {
    for (const { max, cls } of ballColors) {
        if (n <= max) return cls;
    }
    return 'ball-green';
}

function generateNumbers() {
    if (!numbersDisplay) return;
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    sorted.forEach((num, i) => {
        const ball = document.createElement('div');
        ball.className = `number-ball ${getBallColor(num)}`;
        ball.textContent = num;
        ball.style.animationDelay = `${i * 0.07}s`;
        numbersDisplay.appendChild(ball);
    });
}

if (generateBtn) {
    generateBtn.addEventListener('click', generateNumbers);
    generateNumbers(); // 초기 실행
}

// ===== Active Nav =====
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href === location.href) link.classList.add('active');
});
