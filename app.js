//DOM PARA PEGAR OS ELEMENTOS HTML
const resultado = document.querySelector('#resultado'); //TEXTO QUE APARECE QUANDO CLICA EM CRIPTOGRAFAR;
const btn_cripto = document.querySelector('#btn_criptografar'); //BOTÃO DE CRIPTOGRAFAR;
const btn_descript = document.querySelector('#btn_descriptografar'); //BOTÃO DE DESCRIPTOGRAFAR;

let texto1 = document.querySelector('#texto1'); //TEXTAREA ONDE O USUARIO COLOCAR O TEXTO PARA ENCRIPTOGRAFAR OU DESCRIPTOGRAFAR;
const reset = document.querySelector('#reset'); // BOTÃO DE RESET;
const btn_copy = document.querySelector('.copy_icon'); //ICONE DE COPIAR COM EVENTO DE CLICK;
const message = document.querySelector('.message'); // MENSAGEM DE COPIAR E COPIADO QUE FICA NO ELEMENTO btn_copy;
const warning = document.querySelector('#warning'); // DIV QUE CONTÉM O TEXTO DE AVISO
const warning_text = document.querySelector('#warning_text'); //AVISO DE QUANDO USA LETRAS MAIUSCULAS OU COM ASCENTUAÇÃO;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                  EVENTOS


//EVENTO DE ATUALIZAR A PÁGINA QUANDO CLICADO EM RESET
reset.addEventListener('click', () => location.reload());

//EVENTOS DE QUANDO PASSAR O MOUSE EM CIMA APARECER A DIV DE COPIAR E SUMIR AO TIRAR O MOUSE
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
        btn_cripto.style.cursor = 'pointer';
        warning.style.visibility = 'hidden';
    };

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                  FUNÇÕES
function encripto() {
    let textoDigitado = texto1.value.toLowerCase();
    let textoModificado = textoDigitado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    resultado.style.background = '#ffff';
    resultado.value = textoModificado
    btn_copy.style.display = 'block';

};

function descript() {
    let textoColado = texto1.value
    let textodescriptografado = textoColado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    resultado.style.background = '#ffff';
    resultado.value = textodescriptografado
    btn_copy.style.display = 'block';
};

function copiarTexto() {

    resultado.removeAttribute('disabled')
    resultado.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    resultado.setAttribute('disabled', true)
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

