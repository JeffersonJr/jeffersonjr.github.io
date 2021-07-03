// Carrega os primeiros comandos 
window.onload = function () {
	// Inicializa os comandos e variáveis 
	iniciar()
	//Roda o jogo dentro do laço
	setInterval(principal, 800 / 30)
}

function iniciar() {
	folhaDesenho = document.getElementById("folha")
	areaDesenho = folhaDesenho.getContext("2d")
	larguraCampo = 600
	alturaCampo = 500
	espessuraRede = 5
	diametroBola = 15
	espessuraRaquete = 11
	alturaRaquete = 100
	efeitoRaquete = 0.3
	velocidadeJogador2 = 5
	posicaoJogador1 = posicaoJogador2 = 40
	posicaoBolaX = posicaoBolaY = 20
	velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 5
	pontuacaoJogador1 = pontuacaoJogador2 = 0
    
	folhaDesenho.addEventListener('mousemove', function (e) {
		posicaoJogador1 = e.clientY - alturaRaquete / 2
	})
}

function principal() {
	desenhar()
    calcular()
    exibirplacar()
}

function desenhar() {
	// campo
	areaDesenho.fillStyle = "#286047"
	areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo)

	areaDesenho.fillStyle = "#FFFFFF"
	areaDesenho.fillRect(larguraCampo / 2 - espessuraRede / 2, 0, espessuraRede, alturaCampo)

	// Desenha a bola
	areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola)

	// Raquetes
	areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete)
    areaDesenho.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete)
    
    areaDesenho.fillStyle = "#FFFFFF"
    
    areaDesenho.fillRect(larguraCampo / 2 - 25, alturaCampo / 2 - 25, 50, 50);

    areaDesenho.fillRect(larguraCampo / 2 - 30, alturaCampo / 2 - 20, 60, 40);
    areaDesenho.fillRect(larguraCampo / 2 - 20, alturaCampo / 2 - 30, 40, 60);

    areaDesenho.fillRect(larguraCampo / 2 - 35, alturaCampo / 2 - 15, 70, 30);
    areaDesenho.fillRect(larguraCampo / 2 - 15, alturaCampo / 2 - 35, 30, 70);    
}

function calcular() {

	posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX
	posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY

	// Verifica a lateral superior
	if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
		velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
	}

	//verifica lateral superior
	if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
		velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
	}

	// Verificandose o Jogador 2 fez um ponto
	if (posicaoBolaX < 0) {
		if (posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete) {
			// Rebater a bola
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX

			var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2)
			velocidadeBolaPosicaoY = diferencaY * efeitoRaquete
		} else {
			// Ponto Jogador 2
			pontuacaoJogador2++
			// Colocar bola no centro
			continuar()
		}
	}
	// Verifica se o jogador 1 fez ponto
	if (posicaoBolaX > larguraCampo) {
		if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete) {
			// Rebater a bola
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX

			var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2)
			velocidadeBolaPosicaoY = diderencaY * efeitoRaquete
		} else {
			// Ponto Jogador 1
			pontuacaoJogador1++
			// Colocar bola no centro
			continuar()
		}
	}

	// Atualiza a posição do jogador 2
	if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
		posicaoJogador2 = posicaoJogador2 + velocidadeJogador2
	} else {
		posicaoJogador2 = posicaoJogador2 - velocidadeJogador2
	}
}

function continuar() {
	posicaoBolaX = larguraCampo / 2
	posicaoBolaY = alturaCampo / 2
	velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX
	velocidadeBolaPosicaoY = 3
}

function exibirplacar() {
    let placarhumano = window.document.querySelector('h5#placarhumano')
    placarhumano.innerHTML = `Humano ${pontuacaoJogador1}`

    let placarmaquina = window.document.querySelector('h5#placarmaquina')
    placarmaquina.innerHTML = `${pontuacaoJogador2} Maquina`
}