const button = document.querySelector('#btn')
const body = document.querySelector('body')
const numberWrapper = document.createElement('div')

let numero = 0


function transformarBodyEmVermelho() {
    body.classList.toggle('ativo')
    body.appendChild(numberWrapper)
    numberWrapper.innerHTML = numero
    ++numero
}


button.addEventListener('click', () => transformarBodyEmVermelho())

// button.addEventListener('click', () => {
//     body.style.background = 'red'
// })

