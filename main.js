// Seleciona todos os elementos com a classe 'tecla' e os armazena em uma lista
const ListaDeteclas = document.querySelectorAll('.tecla');

// Inicializa um contador com valor 0
// let contador = 0;

// Função que toca o som correspondente ao elemento de áudio passado como parâmetro
function playSom(seletorAudio){
    // Seleciona o elemento de áudio pelo ID e executa o método play() para tocar o som
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
        
    }else{
        alert('O instrumento não foi encontrado');
    }
}   

// Loop que percorre todos os elementos da lista de teclas
// Incrementa o contador para passar para a próxima tecla
for(let contador = 0; contador < ListaDeteclas.length; contador++){

    // Armazena a tecla atual na variável 'tecla'
    const tecla = ListaDeteclas[contador];

    // Obtém a segunda classe do elemento tecla, que indica o instrumento
    const instrumento = tecla.classList[1];

    // Cria o ID do elemento de áudio correspondente ao instrumento
    const idAudio =  `#som_${instrumento}`;

    // Adiciona um evento de clique à tecla que toca o som correspondente quando clicada
    tecla.onclick = function (){
        playSom(idAudio);
        // tecla.classList.add('ativa');
        // setTimeout(function(){
        //     tecla.classList.remove('ativa');
        // }, 100);
        // setTimeout é usado para atrasar a execução da função playSom por um determinado tempo (em milissegundos)
        // Isso pode ser útil para criar um efeito de atraso no som ou para sincronizar com outras ações
    }
    // Adiciona um evento onde quando à tecla é pressionada no teclado a classe ativa é adicionada
    tecla.onkeydown = function (evento){
        if (evento.code === 'Enter'|| evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
        
    }
    // Adiciona um evento onde quando à tecla é solta no teclado a classe ativa é removida
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}





