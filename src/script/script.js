document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('myAudio');
    const songNameElement = document.querySelector('.song-name');
    const composerElement = document.querySelector('.composer');

    audioPlayer.addEventListener('play', function() {
        songNameElement.style.display = 'block';
        composerElement.style.display = 'block';
    });

    audioPlayer.addEventListener('pause', function() {
        songNameElement.style.display = 'none';
        composerElement.style.display = 'none';
    });
});
