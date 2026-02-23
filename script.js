const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMsg = document.getElementById('success-msg');

// 1. ลูกเล่นปุ่ม "ไม่" ที่วิ่งหนีเวลาจะกด
noBtn.addEventListener('mouseover', () => {
    // คำนวณตำแหน่งสุ่ม
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. เมื่อกดปุ่ม "ตกลง"
yesBtn.addEventListener('click', () => {
    successMsg.style.display = 'block';
    document.querySelector('.btn-group').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    
    // สาดหัวใจรัวๆ
    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 50);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating';
    const emojis = ['❤️', '💖', '✨', '🌸', '🍬'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--duration', (Math.random() * 2 + 3) + 's');
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// สร้างหัวใจเบาๆ ตลอดเวลา
setInterval(createHeart, 600);