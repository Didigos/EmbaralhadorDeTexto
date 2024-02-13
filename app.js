const resultado = document.querySelector('#resultado');
const btn_cripto = document.querySelector('#btn_criptografar');
const btn_descript = document.querySelector('#btn_descriptografar');
const main2_container = document.querySelector('.button_main');
const main_textarea = document.querySelector('#main_textarea');
let texto1 = document.querySelector('#texto1');
const reset = document.querySelector('#reset');
const btn_copy = document.querySelector('.copy_icon');
const message = document.querySelector('.message');
const warning = document.querySelector('#warning');
const warning_text = document.querySelector('#warning_text');

btn_descript.addEventListener('click', () => {
    descript()
});

btn_cripto.addEventListener('click', () => {
    encripto()
});

texto1.addEventListener('input', function (event) {

    let textoDigitado = event.target.value;

    if (temMaiuscula(textoDigitado)) {
        texto1.classList.add('texto1__warning');
        btn_cripto.style.background = '#bbbbbb';
        btn_cripto.setAttribute('disabled',true);
        warning.style.visibility = 'visible';
        warning.style.width = 'fit-content';
        btn_cripto.style.cursor = 'no-drop';
        warning_text.textContent = 'Não pode conter letras Maíusculas!';

    } else if (temAcentuacao(textoDigitado)) {
        texto1.classList.add('texto1__warning');
        btn_cripto.style.background = '#bbbbbb';
        btn_cripto.setAttribute('disabled',true);
        warning.style.visibility = 'visible';
        warning.style.width = 'fit-content';
        btn_cripto.style.cursor = 'no-drop';
        warning_text.textContent = 'Não pode conter acentuação!';
    }
    else {
        texto1.classList.remove('texto1__warning');
        btn_cripto.removeAttribute('disabled');
        btn_cripto.style.background = '#04AA6D';
        warning.style.width = '25px';
        btn_cripto.style.cursor = 'pointer';
        warning.style.visibility = 'hidden';
    };

});

reset.addEventListener('click', () => location.reload());

btn_copy.addEventListener('mouseover', ()=>{
    message.style.display = 'block';
});

btn_copy.addEventListener('mouseout', ()=>{
    message.style.display = 'none';
    message.style.background = '#3E8ACC';
    message.textContent = 'Copiar';
});

btn_copy.addEventListener('click',()=>{
    copiarTexto();
    message.style.background = '#04AA6D';
    message.textContent = 'Copiado!';
});

function encripto() {
    let textoDigitado = texto1.value.toLowerCase();
    let textoModificado = textoDigitado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    resultado.style.background = '#ffff';
    resultado.removeAttribute('disabled');
    resultado.textContent = textoModificado;
    btn_copy.style.display = 'block';

};

function descript() {
    let textoColado = texto1.value
    let textodescriptografado = textoColado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    resultado.style.background = '#ffff';
    resultado.removeAttribute('disabled');
    resultado.textContent = textodescriptografado;
    btn_copy.style.display = 'block';
};

function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
};

function removeAcenturacoes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

function temMaiuscula(texto) {
    return /[A-Z]/.test(texto);
};

function temAcentuacao(texto) {
    return /[áàãâéêíóôõúü]/i.test(texto);
};

function textoDeAviso(){ 
    warning.style.width = '100px';
};

