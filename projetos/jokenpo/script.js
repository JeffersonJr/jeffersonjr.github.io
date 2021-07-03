var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorEscolha = 0;
var computadorPontos = 0;

// Gera números randomicos.
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
// 4 - lagarto
// 5 - Spock
function sortear(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Traduz o número em frase.
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
// 4 - lagarto
// 5 - Spock
function traduzirEscolha(numero) {
	if (numero == 1) {
		return 'Pedra';
	} else if (numero == 2) {
		return 'Papel';
	} else if (numero == 3) {
		return 'Tesoura';
	} else if (numer == 4) {
        return 'Lagarto'
    } else if (number == 5) {
        return 'Spock'
    }
}

// Adiciona a classe selecionado.
function selecionar(tipo, escolha) {
	document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

// Remove a classe selecionado.
function deselecionar(tipo, escolha) {
	document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

// Escreve na tela uma mensagem.
function mensagem(texto) {
	document.getElementById('mensagem').innerHTML = texto;
}

// Escreve no placar o nome do jogador.
function definirJogadorNome(nome) {
	document.getElementById('jogador-nome').innerHTML = nome;
}

//Calcula e retorna quem ganhou
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador) {
	    //Se ambos jogam pedra
	if (jogador == 1 && computador == 1) {
		return 0
		//Se jogador joga pedra e computador joga papel
	} else if (jogador == 1 && computador == 2) {
		return 2
		//Se jogador joga pedra e computador joga tesoura
	} else if (jogador == 1 && computador == 3) {
		return 1
		//Se jogador joga pedra e computador lagarto 
	} else if (jogador == 1 && computador == 4) {
		return 1
		//Se jogador joga pedra e computador spock
	} else if (jogador == 1 && computador == 5) {
        return 2
        //Se ambos jogam papel
	}else if (jogador == 2 && computador == 2) {
		return 0
		//Se jogador joga papel e computador joga pedra
	} else if (jogador == 2 && computador == 1) {
		return 1
		//Se jogador joga papel e computador joga tesoura
	} else if (jogador == 2 && computador == 3) {
		return 2
		//Se jogador joga papel e computador lagarto 
	} else if (jogador == 2 && computador == 4) {
		return 2
		//Se jogador joga papel e computador spock
	} else if (jogador == 2 && computador == 5) {
        return 1
        //Se ambos jogam tesoura
	}else if (jogador == 3 && computador == 3) {
		return 0
		//Se jogador joga tesoura e computador joga pedra
	} else if (jogador == 3 && computador == 1) {
		return 2
		//Se jogador joga tesoura e computador joga papel
	} else if (jogador == 3 && computador == 2) {
		return 1
		//Se jogador joga tesoura e computador lagarto 
	} else if (jogador == 3 && computador == 4) {
		return 1
		//Se jogador joga tesoura e computador spock
	} else if (jogador == 3 && computador == 5) {
        return 2
        //Se ambos jogam lagarto 
	}else if (jogador == 4 && computador == 4) {
		return 0
		//Se jogador joga lagarto e computador joga pedra
	} else if (jogador == 4 && computador == 1) {
		return 2
		//Se jogador joga lagarto e computador joga papel
	} else if (jogador == 4 && computador == 2) {
		return 1
		//Se jogador joga lagarto e computador joga tesoura
	} else if (jogador == 4 && computador == 3) {
		return 2
		//Se jogador joga lagarto e computador spock
	} else if (jogador == 4 && computador == 5) {
        return 1
        //Se ambos jogam spock
	} else if (jogador == 5 && computador == 5) {
		return 0
		//Se jogador joga spock e computador joga pedra
	} else if (jogador == 5 && computador == 1) {
		return 1
		//Se jogador joga spock e computador joga papel
	} else if (jogador == 5 && computador == 2) {
		return 2
		//Se jogador joga spock e computador joga tesoura
	} else if (jogador == 5 && computador == 3) {
		return 1
		//Se jogador joga spock e computador lagarto 
	} else if (jogador == 5 && computador == 4) {
		return 2
	}
}

// Soma os pontos do jogador
function somarPontoJogador() {
	jogadorPontos++;
	document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

// Soma os pontos do computador
function somarPontoComputador() {
	computadorPontos++;
	document.getElementById('computador-pontos').innerHTML = computadorPontos;
	
}

// Função de jogar
function jogar(escolha) {
	jogadorEscolha = escolha;
	selecionar('jogador', jogadorEscolha);

	computadorEscolha = sortear(1, 5);
	selecionar('computador', computadorEscolha);

	var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

	if (ganhador == 0) {
		mensagem('Empate');
	} else if (ganhador == 1) {
		mensagem(`Ponto para ${jogadorNome}`);
		somarPontoJogador();
	} else if (ganhador == 2) {
		mensagem('Ponto para Computador');
		somarPontoComputador();
	}

	setTimeout(function () {
		deselecionar('jogador', jogadorEscolha);
		deselecionar('computador', computadorEscolha);
		mensagem(jogadorNome + ' escolha uma opção...');
	}, 1000);
}

document.getElementById('jogador-escolha-1').onclick = function () {
	jogar(1);
};
document.getElementById('jogador-escolha-2').onclick = function () {
	jogar(2);
};
document.getElementById('jogador-escolha-3').onclick = function () {
	jogar(3);
};
document.getElementById('jogador-escolha-4').onclick = function () {
	jogar(4);
};
document.getElementById('jogador-escolha-5').onclick = function () {
	jogar(5);
};

jogadorNome = prompt("Qual é o seu nome?");
definirJogadorNome(jogadorNome);

mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...');