window.onload = function (){
// criando as variaveis responsaveis pelos 00:00

    let seconds = 00
    let tens = 00
//
    const milesemos = document.querySelector("#tens")
    const segundos = document.querySelector("#seconds")
    const botaoStart = document.querySelector("#start")
    const botaoStop = document.querySelector("#stop")
    const botaoReset = document.querySelector("#reset")
 
// criando a variavel responsavel que guarda o valor do stop

    let Interval
//

    // criando as funcoes de cada botao
    botaoStart.onclick = function(){
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    botaoStop.onclick = function(){
        clearInterval(Interval)
    }

    botaoReset.onclick = function(){
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        milesemos.innerHTML = tens
        segundos.innerHTML = seconds
    }
    // 


    function start(){
        
    }
    }
