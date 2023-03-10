window.onload = function () {
  
    var seconds = 00;  // responsaveis pelo 00:00 do reset
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval 
  // funcao de quando clicar nos botoes
    buttonStart.onclick = function() {
      
      clearInterval(Interval); // limpar intervalo
       Interval = setInterval(startTimer, 10); // set definir intervalo // startTimer iniciar temporizador
    }
    
    buttonStop.onclick = function() {
        clearInterval(Interval); // assim que clicar no botao de stop estamos passando a variavel que guarda o stop 
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
        tens = "00"; // assim que clicarmos em resetar estamos colocando duas strings que os "00:00"para poder resetar
        seconds = "00";
        appendTens.innerHTML = tens; // selecionando os elementos html para a funcao funcionar
        appendSeconds.innerHTML = seconds;
    }
    
     //
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens; // se milesemos for menor ou igial a 9 acresenta um 0 
      }
      
      if (tens > 9){ 
        appendTens.innerHTML = tens; // se milesemos for maior que 9 deixa como esta
        
      } 
      // perguntar para o mor
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds; // estamos acresentando um 0
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){ // e se segundos for maior que 9 pode seguir sem o 0
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  }