document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('myAudio');
    const songNameElement = document.querySelector('.song-name');
    const composerElement = document.querySelector('.composer');
    const imagesContainer = document.getElementById('imageBox');
    const numberOfImages = 10;

    audioPlayer.addEventListener('play', function() {
        songNameElement.style.display = 'block';
        composerElement.style.display = 'block';
    });

    audioPlayer.addEventListener('pause', function() {
        if (audioPlayer.paused) {
            songNameElement.style.display = 'block';
            composerElement.style.display = 'block';
        } else {
            songNameElement.style.display = 'none';
            composerElement.style.display = 'none';
        }
    });

    for (let i = 1; i <= numberOfImages; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        
        const image = document.createElement('img');
        const imageNumber = numberOfImages - i + 1;
        image.src = `./src/image/image${imageNumber}.jpg`;
        
        span.appendChild(image);
        imagesContainer.appendChild(span);
    }
});
