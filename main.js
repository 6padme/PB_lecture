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

// ===== 19세 이상 Age Notice =====
(function() {
    const notice = document.createElement('div');
    notice.className = 'age-notice';
    notice.textContent = '⚠️ 본 사이트는 만 19세 이상 이용자를 대상으로 합니다. 로또는 사행성 오락으로 과도한 구매를 금합니다.';
    const header = document.querySelector('header');
    if (header) header.insertAdjacentElement('afterend', notice);
})();

// ===== Responsible Gambling Footer Notice =====
(function() {
    const footerInner = document.querySelector('footer .footer-inner');
    if (!footerInner) return;
    const notice = document.createElement('div');
    notice.className = 'responsible-gambling';
    const isArticle = location.pathname.includes('/articles/');
    notice.innerHTML =
        '⚠️ <strong>책임도박 안내</strong> &mdash; 본 사이트는 정보 제공 목적으로만 운영되며 과도한 복권 구매를 권장하지 않습니다.<br>' +
        '문제도박 상담전화: <strong>1336</strong> (도박문제관리센터, 24시간 무료) &nbsp;|&nbsp; 만 19세 미만 구매 불가';
    const copyright = footerInner.querySelector('p');
    if (copyright) footerInner.insertBefore(notice, copyright);
    else footerInner.appendChild(notice);
})();

// ===== Cookie Consent Banner =====
(function() {
    if (localStorage.getItem('cookieConsent') === 'accepted') return;
    const isArticle = location.pathname.includes('/articles/');
    const privacyHref = isArticle ? '../privacy.html' : 'privacy.html';
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML =
        '<p>본 사이트는 서비스 개선 및 Google AdSense 맞춤 광고 제공을 위해 쿠키를 사용합니다. ' +
        '계속 이용하시면 쿠키 사용에 동의하는 것으로 간주합니다. ' +
        '(<a href="' + privacyHref + '">개인정보처리방침</a>)</p>' +
        '<button class="cookie-banner-btn" id="cookie-accept">동의하고 계속</button>';
    document.body.appendChild(banner);
    document.getElementById('cookie-accept').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.add('hidden');
    });
})();
