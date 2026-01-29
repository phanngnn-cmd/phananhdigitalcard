document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();
});

function copyEmail() {
    const emailText = document.getElementById('email-text').innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        const card = document.querySelector('.email-card');
        card.classList.add('copied');

        setTimeout(() => {
            card.classList.remove('copied');
        }, 2000);
    });
}

function downloadVCard() {
    // Simple vCard generator
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
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'phan_anh_nguyen.vcf');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
