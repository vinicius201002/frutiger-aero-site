
const images = [
    'https://frutiger-aero.org/img/frutiger-aero-1.webp',
    'https://preview.redd.it/new-beautiful-frutiger-aero-wallpaper-for-windows-7-v0-oxewf8m6mpmc1.png?width=1080&crop=smart&auto=webp&s=a585c9ea7ee2e895f59e87a0865927a167f4547c',
    'https://preview.redd.it/i-made-my-pc-look-frutiger-aero-any-suggestions-v0-eta547prwzvb1.png?auto=webp&s=9a9ffefd6b7527c9346fe3fa84572139525dee5d',
    'https://frutiger-aero.org/img/frutiger-aero-4.webp',
    'https://frutiger-aero.org/img/frutiger-eco-2.webp',
    'https://frutiger-aero.org/img/frutiger-aero-6.webp'
];

let currentIndex = 0;
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 10000); 

window.onload = changeBackgroundImage;
