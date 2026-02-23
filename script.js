const loveBtn = document.getElementById('loveBtn');
const msg = document.getElementById('msg');

loveBtn.addEventListener('click', () => {
    msg.style.display = 'block';
    // สาดหัวใจเมื่อกดปุ่ม
    for(let i=0; i<20; i++) {
        setTimeout(createHeart, i * 80);
    }
    // เปลี่ยนข้อความบนปุ่ม
    loveBtn.innerHTML = "ได้รับความรักแล้ว 😊";
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    // สุ่ม emoji หัวใจหลายแบบ
    const hearts = ['❤️', '💖', '💝', '💗', '💓'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// ลอยเบาๆ ตลอดเวลา
setInterval(createHeart, 1000);