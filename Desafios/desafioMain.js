const listaDeTeclas = document.querySelectorAll('input[type="button"]');
const inputTel = document.querySelector('input[type=tel]');

for(contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];

    tecla.onclick = function(){
        console.log(tecla.value);
        inputTel.value = inputTel.value + tecla.value;
  
    }
        
}