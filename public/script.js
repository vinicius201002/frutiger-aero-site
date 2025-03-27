
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

// Novo código para envio de mensagens
document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = {
        name: form.name.value,
        message: form.message.value
    };
    
    const statusElement = document.getElementById('messageStatus');
    
    try {
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            statusElement.textContent = 'Mensagem enviada com sucesso!';
            statusElement.className = 'status-message success';
            form.reset();
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    } catch (error) {
        statusElement.textContent = 'Erro ao enviar mensagem. Tente novamente.';
        statusElement.className = 'status-message error';
        console.error('Erro:', error);
    }
    
    setTimeout(() => {
        statusElement.className = 'status-message';
        statusElement.textContent = '';
    }, 5000);
});
