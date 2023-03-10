const milesemos = document.querySelector("#tens")
const segundos = document.querySelector("#seconds")
const botaoStart = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

botaoStart.addEventListener("click", ()=> {
    start() // chamando a funcao 
    milliseconds()
})

function start() {
    let date = new Date() // criando a class date que sera respondavel pelos metodos de horarios
    let sec = date.getSeconds() 
    segundos.innerHTML = sec // chamando segundos pois é a posicao onde queremos que funcione, inerhtm para inserir um elemento html ja existente em um documento js

    var timer = setInterval(start,1000);
 
}

function milliseconds(){
    let date = new Date()

    let mile = date.getMilliseconds()
    tens.innerHTML = mile

    if(mile < 10){
        tens.innerHTML = "0" + mile
    }else{
        tens.innerHTML = mile
    }
    var timerr = setInterval(milliseconds,10)
}