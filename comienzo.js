const texto = document.querySelector("#texto-entrada").innerText;
const palabras = texto.split(' ').map(palabra => limpiarTexto(palabra))
const letras = palabras.join(' ').split('')
const resultados_palabras = {} 
const resultados_letras = {}

function revision(arr, obj){
  arr.map(txt => obj[txt] = txt in obj ? obj[txt] + 1 : 1)
  return obj
}


function limpiarTexto(txt){
  return txt.replace(',', '').replace('.', '').toLowerCase()
}

function imprimir(obj, lugar){
  Object.keys(obj).forEach(txt => {
    const li = document.createElement('li')
    li.innerText = txt + ' ' + obj[txt]
    document.querySelector(`#${lugar}`).appendChild(li)
  })
}

const resultado = revision(palabras, resultados_palabras)
imprimir(resultados_palabras, 'palabras')

revision(letras, resultados_letras)
imprimir(resultados_letras, 'letras')
