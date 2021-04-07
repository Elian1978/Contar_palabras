console.log("Hola mundo");
const parrafo = document.getElementById('texto-entrada');
const div_resultados = document.getElementById('resultados');

console.log(div_resultados);

const palabras = parrafo.innerText.split(' ');
console.log(parrafo)

const resultados = {};

palabras.forEach(palabra => {
  // console.log(palabra);
  palabra = palabra.replace(',', '').replace('.', '').toLowerCase()
  if (palabra in resultados) {
    resultados[palabra] += 1;
  } else {
    resultados[palabra] = 1;
  }
});

// Object.keys(resultados).forEach(resultado => {
//   document
// })

console.log(resultados)
