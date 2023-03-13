window.onload = function (){ 

    let seconds = 00
    let tens = 00

    const milesemos = document.querySelector("#tens")
    const segundos = document.querySelector("#seconds")
    const botaoStart = document.querySelector("#start")
    const botaoStop = document.querySelector("#stop")
    const botaoReset = document.querySelector("#reset")

    let Interval

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
    function startTimer(){
        tens++

        if(tens <= 9){
            milesemos.innerHTML = "0" + tens
        }
        if(tens > 9){
            milesemos.innerHTML = tens
        }

        if(tens > 99){
            console.log("seconds")
            seconds++
            segundos.innerHTML = "0" + seconds
            tens = 0
            milesemos.innerHTML = "0" + 0
        }
        if(seconds > 9){
            segundos.innerHTML = seconds
        }
    }
    }
