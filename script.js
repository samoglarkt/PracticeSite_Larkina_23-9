document.addEventListener('DOMContentLoaded', function () {
    const heroCard = document.getElementById('heroCard');
    const badgeTop = document.getElementById('badgeTop');
    const badgeBottom = document.getElementById('badgeBottom');
    const playDemo = document.getElementById('playDemo');
    const burger = document.getElementById('burger');

if (heroCard && (badgeTop || badgeBottom)) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const maxShift = 12;
    if (badgeTop) {
        badgeTop.style.transform = `translate3d(${x * maxShift}px, ${y * maxShift}px, 0)`;
        }
    if (badgeBottom) {
        badgeBottom.style.transform = `translate3d(${x * -maxShift}px, ${y * -maxShift}px, 0)`;
        }
    });

    heroCard.addEventListener('mouseleave', () => {
    if (badgeTop) badgeTop.style.transform = '';
    if (badgeBottom) badgeBottom.style.transform = '';
    });
}

if (playDemo) {
    playDemo.addEventListener('click', () => {
        alert('Здесь откроется демо (вставьте своё видео или модальное окно).');
    });
}

if (burger) {
    burger.addEventListener('click', () => {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;
        if (nav.style.display === 'flex') {
        nav.style.display = '';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '66px';
        nav.style.right = '24px';
        nav.style.background = '#fff';
        nav.style.padding = '12px 16px';
        nav.style.borderRadius = '10px';
        nav.style.boxShadow = '0 10px 30px rgba(16,24,40,0.08)';
    }
    });
}
});
