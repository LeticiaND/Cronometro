const milesemos = document.querySelector("#tens")
const segundos = document.querySelector("#seconds")
const botaoStart = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

botaoStart.addEventListener("click", ()=> {
    start() // chamando a funcao 
})

function start() {
    let date = new Date() // criando a class date que sera respondavel pelos metodos de horarios
    let sec = date.getSeconds() 
    segundos.innerHTML = sec // chamando segundos pois é a posicao onde queremos que funcione, inerhtm para inserir um elemento html ja existente em um documento js

    let mile = date.getMilliseconds()
    tens.innerHTML = mile
    
}
var timer = setInterval(start,1000);

