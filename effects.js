const cafes = document.querySelectorAll('.cafe-circle');
const zoomImgs = document.querySelectorAll('.zoom-img');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    // Rotación de cafés
    cafes.forEach((cafe, index) => {
        let rotation = scrollY * (0.1 + index * 0.05); // cada uno rota a diferente velocidad
        cafe.style.transform = `rotate(${rotation}deg)`;
    });

    // Zoom en imágenes al aparecer
    zoomImgs.forEach(img => {
        const rect = img.getBoundingClientRect();
        const visible = window.innerHeight - rect.top;
        if (visible > 0 && visible < window.innerHeight) {
            let scale = 1 + visible / window.innerHeight * 0.2;
            img.style.transform = `scale(${scale})`;
        } else {
            img.style.transform = 'scale(1)';
        }
    });
});
