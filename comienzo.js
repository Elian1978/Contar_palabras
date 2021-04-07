const div_resultados = document.querySelector('#resultados')
const texto = document.querySelector("#texto-entrada").innerText;
const palabras = texto.split(' ');
const resultados = {} // Object

// debugger;
palabras.forEach(palabra => {
    palabra = palabra.replace(',', '').replace('.', '').toLowerCase()
    if (palabra in resultados) {
      resultados[palabra] = resultados[palabra] + 1
    } else {
      resultados[palabra] = 1
    }
  });

//Object.keys extraer llaves
Object.keys(resultados).forEach(resultado => {
    const resultadito = document.createElement('li')
    resultadito.innerText = resultado + ' ' + resultados[resultado]
    div_resultados.appendChild(resultadito)
})

console.log(resultados)
