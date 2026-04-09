document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3D Card Effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
            card.style.boxShadow = `0 10px 30px rgba(0, 243, 255, 0.2)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
            card.style.boxShadow = `none`;
        });
    });
});

function copyEmail() {
    // Kept for backward compatibility (older HTML used a copy-to-clipboard email card).
}

function downloadVCard() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Phan Anh Nguyen
TITLE:Founder & CEO
ORG:Loudio;
TEL;TYPE=CELL:+84904568811
EMAIL:phananh.nguyen@loudio.vn
URL:https://loudio.vn
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'PhanAnhNguyen.vcf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}
