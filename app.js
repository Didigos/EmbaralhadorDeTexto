const resultado = document.querySelector('#resultado')
const btn_cripto = document.querySelector('#btn_criptografar')
const btn_descript = document.querySelector('#btn_descriptografar')
const main2_container = document.querySelector('.button_main')
const main_textarea = document.querySelector('.main_textarea')
let texto1 = document.querySelector('#texto1')
const reset = document.querySelector('#reset')

const btn_copy = document.createElement('button')

btn_descript.addEventListener('click', ()=>{
    descript()
})


btn_cripto.addEventListener('click', ()=>{
    encripto()
})

reset.addEventListener('click', ()=> location.reload())

function encripto() {
    let textoDigitado = texto1.value.toLowerCase()
    let textoModificado = textoDigitado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    
    resultado.style.background = '#ffff'
    resultado.removeAttribute('disabled')
    resultado.textContent = removeAcenturacoes(textoModificado)

    criarBotaoCopiar()    

}

function descript(){
    let textoColado = texto1.value
    let textodescriptografado = textoColado.replace(/enter/g, 'e').replace(/imes/g,'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    resultado.style.background = '#ffff'
    resultado.removeAttribute('disabled')

    return resultado.textContent = textodescriptografado
}

function criarBotaoCopiar() {
    main2_container.appendChild(btn_copy)
    btn_copy.id = 'copiar'
    btn_copy.setAttribute('onclick', 'copiarTexto()')
    btn_copy.textContent = 'copiar texto'

}

function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    btn_copy.textContent = 'Copiado!'
}

function removeAcenturacoes(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
