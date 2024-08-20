function textGenerate(length , includeNumbers = false, includeCharacter = false) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + (includeNumbers ? '0123456789' : '') + (includeCharacter ? '!@$%^&*+#' : '');
    let randomText = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomText += chars[randomIndex];
    }
    return randomText;
}

function generateRandomText(){
    const rangeLength = document.querySelector('#input-range');
    const rangeValue = rangeLength.value;
    const includeNumbers = document.querySelector('#numbersInput').checked;
    const includeCharacter = document.querySelector('#symbolInput').checked;
    const randomText = textGenerate(Number(rangeValue), includeNumbers, includeCharacter);
    console.log(randomText);
    const copyText = 
    document.querySelector('.password-input').value = randomText;
    let showLength = document.querySelector('#lengthvalue');
    showLength.innerHTML = randomText.length;
}



async function copyText() {
    const passwordInput = document.querySelector('.password-input');
    try {
        await navigator.clipboard.writeText(passwordInput.value);
        const message = document.querySelector('.message');
        message.innerHTML = "Password Copied!"
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy password.');
    }
}


document.querySelector('#input-range').addEventListener('input', generateRandomText);
document.querySelector('#numbersInput').addEventListener('change', generateRandomText);
document.querySelector('#symbolInput').addEventListener('change', generateRandomText);
document.querySelector('.generate-btn').addEventListener('click', copyText);

generateRandomText();




