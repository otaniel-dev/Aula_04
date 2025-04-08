let personagem = ['', '', ''];
let viloes = ['', '', ''];
let forcasPersonagem = [0, 0, 0];
let forcasViloes = [0, 0, 0];

let forcaPersonagem = 0;
let forcaViloes = 0;
let resultado = '';

// Esconde o botão de reload quando a página carregar
window.onload = function() {
    document.querySelector('.reload').style.display = 'none';
}

function jogar() {
    forcaPersonagem = 0;
    forcaViloes = 0;
    
    for (let i = 0; i < 3; i++) {
        personagem[i] = prompt('Digite o nome do personagem ' + (i + 1) + ': ');
        forcasPersonagem[i] = Math.floor(Math.random() * 10) + 1;
        forcaPersonagem += forcasPersonagem[i];
    }

    let infoJogadores = `
        <div class="time-container">
            <h3 class="time-title">Seu Time</h3>
            <div class="cards-container">
                ${personagem.map((nome, index) => `
                    <div class="card">
                        <div class="card-header">
                            <span class="personagem-nome">${nome}</span>
                            <span class="forca-valor">${forcasPersonagem[index]}</span>
                        </div>
                        <div class="barra-forca">
                            <div class="progresso" style="width: ${forcasPersonagem[index] * 10}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="total-container">
                <span>Força Total do Time:</span>
                <span class="total-valor">${forcaPersonagem}</span>
            </div>
        </div>`;
    document.getElementById('informacoesJogador').innerHTML = infoJogadores;

    for (let i = 0; i < 3; i++) {
        indiceAleatorio = Math.floor(Math.random() * 10);
        viloesPossiveis = ['Pain', 'Orochimaru', 'Kakashi', 'Tsunade', 'Jiraiya', 'Nagato', 'Kisame', 'Deidara', 'Sasuke', 'Itachi'];
        viloes[i] = viloesPossiveis[indiceAleatorio];
        forcasViloes[i] = Math.floor(Math.random() * 10) + 1;
        forcaViloes += forcasViloes[i];
    }

    let infoViloes = `
        <div class="time-container">
            <h3 class="time-title">Time dos Vilões</h3>
            <div class="cards-container">
                ${viloes.map((nome, index) => `
                    <div class="card">
                        <div class="card-header">
                            <span class="personagem-nome">${nome}</span>
                            <span class="forca-valor">${forcasViloes[index]}</span>
                        </div>
                        <div class="barra-forca">
                            <div class="progresso" style="width: ${forcasViloes[index] * 10}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="total-container">
                <span>Força Total do Time:</span>
                <span class="total-valor">${forcaViloes}</span>
            </div>
        </div>`;
    document.getElementById('informacoesComputador').innerHTML = infoViloes;

    if (forcaPersonagem > forcaViloes) {
        resultado = 'Seu time venceu!';
    } else if (forcaPersonagem < forcaViloes) {
        resultado = 'Seu time foi derrotado!';
    } else {
        resultado = 'Empate!';
    };

    document.getElementById('resultadoFinal').innerHTML = resultado;
    document.getElementById('resultadoFinal').classList.add('fim-do-jogo');
    document.querySelector('.botao-jogar').style.display = 'none';
    document.querySelector('.reload').style.display = 'block';
}

function reload() {
    window.location.reload();  
    document.querySelector('.reload').style.display = 'none';
}
