let frases=[
  "Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos imaginar el que queremos que sea. El derecho de soñar no figura entre los treinta derechos  humanos  que  las  Naciones Unidas  proclamaron a  fines de 1948.  Pero  si  no  fuera  por  él,  y  por  las  aguas  que  da  de  beber,  los  demás derechos se morirían de sed,",
  "La educación es algo admirable, pero es bueno recordar de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado,",
  "Cuando es verdadera, cuando nace de la necesidad de decir, a la voz humana no hay quien la pare. Si le niegan la boca, ella habla por las manos, o por los ojos, opor los poros, o por donde sea",
  "Nunca pensé que en la felicidad hubiera tanta tristeza",
  "Las  cosas  simples  son  las  más  extraordinarias  y  sólo  los  sabios  consiguen verlas,"]

const autores = [
  "Eduardo Galeano.",
  "Oscar Wilde",
  "Eduardo Galeano.",
  "Mario Benedetti.",
  "Paulo Coelho"
]

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let container = document.getElementById('frases')
let text = document.createElement('p')
let autor = document.createElement('p')
text.innerText = frases[0]
autor.innerText = autores[0]
container.appendChild(text)
container.appendChild(autor)
const cambiarTexto = (index) => {
  container.innerHTML = ''
  text.innerText = frases[index]
  autor.innerText = autores[index]
  container.appendChild(text)
  container.appendChild(autor)
}
let minIndex = 0;
let maxIndex = autores.length - 1;
let index = minIndex;
setInterval(() => {
cambiarTexto (index);
if (index === maxIndex) {
  index = minIndex;
} else {
  index++;
}
}, 4000);

// while(true){
//     for (let index = 0; index < 5; index++) {
//         container.innerHTML = ''
//         text.innerText = frases[index]
//         autor.innerText = autores[index]
//         container.appendChild(text)
//         container.appendChild(autor)
//         await sleep(3000)
//     }
// }