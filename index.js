console.log("Hola mundo");
const parrafo = document.getElementById('texto-entrada');
console.log(parrafo)
const palabras = parrafo.innerText.split(' ');

const resultados = {

};

palabras.forEach(palabra => {
  // console.log(palabra);
  palabra = palabra.replace(',', '').replace('.', '').toLowerCase()
  if (palabra in resultados) {
    resultados[palabra] += 1;
  } else {
    resultados[palabra] = 1;
  }
});

console.log(resultados)
