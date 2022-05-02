const Regex = /^[a-z\s]+$/;

const inputText = document.querySelector('.title-input');
const showInput = document.getElementById('input-div-result');

const btnEncrypt = document.querySelector('.encrypt');
const btnDecrypt = document.querySelector('.decrypt');
const bntCopy = document.querySelector('.btnCopy');

inputText.focus();

// Função para fazer a Criptografia utilizando o REGEX;
function encrypt() {
    let getText = inputText.value;

    if (Regex.test(getText) == true){
        let encryptText = getText
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('u', 'ufat')
            .replaceAll('o', 'ober');

        return showInput.value = encryptText;
    } else {
        alert('A mensagem está fora do padrão aceito, por favor revise o texto');
    }
}

function decrypt() {
    let getText = inputText.value;
    if (Regex.test(getText) == true) {
        let decryptText = getText
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")
        .replaceAll("ober", "o");
        
        return showInput.value = decryptText;
    } else {
        alert('A mensagem está fora do padrão aceito, por favor revise o texto');
    }
}

function copyText() {
    navigator.clipboard.writeText(showInput.textContent);
}

btnEncrypt.addEventListener('click', () => {
    showInput.innerHTML = encrypt();
    inputText.value = '';
    inputText.focus();
});

btnDecrypt.addEventListener('click', () => {
    showInput.innerHTML = decrypt();
    inputText.value = '';
    inputText.focus();
})

bntCopy.addEventListener('click', () => {
    copyText();
    inputText.focus();
    const value = showInput.value;
    inputText.value = value;
})