var cartas = [
    carta1 = {
        nome: "Bulbassauro",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 6
        }
    }
    ,
    carta2 = {
        nome: "Dart Vader",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
        atributos: {
            ataque: 9,
            defesa: 8,
            magia: 2
        }
    }
    ,
    carta3 = {
        nome: "Shiryu de Dragão",
        imagem: "https://i.ytimg.com/vi/vN6Jun3D0Tg/hqdefault.jpg",
        atributos: {
            ataque: 5,
            defesa: 9,
            magia: 10
        }
    }
]
//var cartas = [carta1, carta2, carta3]
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];    

    var numeroCartaJogador = 2; //parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];    

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();        
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];    
    var htmlResultado = "";
    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");    
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";     
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";     
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}