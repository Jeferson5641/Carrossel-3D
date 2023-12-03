document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imageBox');
    const numberOfImages = 10;

    for (let i = numberOfImages; i > 0; i--) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        
        const image = document.createElement('img');
        image.src = `./src/image/image${i}.jpg`;
        
        span.appendChild(image);
        imagesContainer.appendChild(span);
    }
});