// ดึง Element จาก HTML
const loveBtn = document.getElementById('loveBtn');
const msg = document.getElementById('msg');

// เมื่อคลิกปุ่ม
loveBtn.addEventListener('click', () => {
    msg.style.display = 'block';
    // สร้างหัวใจรัวๆ 15 ดวง
    for(let i=0; i<15; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// ฟังก์ชันสร้างหัวใจ
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    
    // สุ่มตำแหน่งและขนาด
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(heart);
    
    // ลบทิ้งเมื่อแสดงผลจบ
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// สร้างหัวใจลอยเบาๆ อัตโนมัติทุก 0.8 วินาที
setInterval(createHeart, 800);