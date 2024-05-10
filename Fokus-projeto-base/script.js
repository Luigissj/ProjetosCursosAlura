const html = document.querySelector('html');
const botoesListItem = document.querySelectorAll('.app__card-button');
const imagem = document.querySelector(".app__image");
const titulo = document.querySelector('.app__title');
const botaoMusica = document.getElementById("alternar-musica");
const botaoTemporizador = document.getElementById('start-pause');
const temporizadorUI = document.querySelector('.app__card-timer');
let textoBotaoTemporizador = document.querySelector("#start-pause span");
let iconeBotaoTemporizador = document.querySelector("#start-pause img");
let temporizadorAuto;
let temporizador = 1500;

let audioBotao = new Audio();

let musica = new Audio("sons/Talk.mp3");
musica.loop = true;

botaoMusica.addEventListener("change", () => {
    if (musica.paused){
        musica.play()
    } else {
        musica.pause();
    }
})

function mudarBotaoAtivo(nome){
    if (nome.includes('foco')){
        imagem.setAttribute('src', `imagens/foco.png`)
        html.setAttribute('data-contexto', 'foco')
        titulo.innerHTML = "Otimize sua produtividade,<br> <strong class='app__title-strong'>mergulhe no que importa.</strong>"
        temporizador = 1500;
    } else {
        const nomeImagem = `descanso-${nome.slice(nome.length-5, nome.length)}`;
        imagem.setAttribute('src', `imagens/${nomeImagem}.png`);
        html.setAttribute('data-contexto', `${nomeImagem}`)
        if (nomeImagem === `descanso-curto`){
            titulo.innerHTML = "Que tal dar uma respirada.<br> <strong class='app__title-strong'>Faça uma pausa curta.</strong>"
            temporizador = 300;
        } else {
            titulo.innerHTML = "Hora de voltar a superficie.<br> <strong class='app__title-strong'>Faça uma pausa longa.</strong>"
            temporizador = 900;
        }
    }
    mostrarTempo()
    pararTemporizador();
    textoBotaoTemporizador.innerHTML = "Começar";
    iconeBotaoTemporizador.src = "imagens/play_arrow.png"
}

function trocarImagemBotãoAtivo(classesTag){
    botoesListItem.forEach((tag) => {
        if (tag.classList.contains('active')){
            tag.classList.remove('active')
        }
    });
    classesTag.add("active");
}

function tocarTemporizador(){

    let tocando = true;

    tocarAudio("play.wav");
    textoBotaoTemporizador.innerHTML = "Pausar";
    iconeBotaoTemporizador.src = "imagens/pause.png"

    if (temporizador === 0){
        temporizador = 10
    }

    async function tocarAudio(arquivo){
        audioBotao.pause();
        await(audioBotao.src = `sons/${arquivo}`);
        audioBotao.play();
    }

    if (temporizadorAuto){
        pararTemporizador();
        if (tocando){
            tocarAudio("pause.mp3");
            textoBotaoTemporizador.innerHTML = "Continuar";
            iconeBotaoTemporizador.src = "imagens/play_arrow.png"
        } else {
            tocarAudio("play.wav");
        }
        return
    }
    temporizadorAuto = setInterval(() => {
        temporizador -= 1;
        mostrarTempo();
        if (temporizador === 0){
            console.log("Temporizador Finalizado");
            pararTemporizador();
            tocarAudio('beep.mp3')
            textoBotaoTemporizador.innerHTML = "Começar";
            iconeBotaoTemporizador.src = "imagens/play_arrow.png"
        }
    }, 1000);
}

function pararTemporizador(){
    clearInterval(temporizadorAuto);
    temporizadorAuto = null;
}

function mostrarTempo(){
    let tempo = new Date(temporizador * 1000);
    temporizadorUI.textContent = tempo.toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"});
}

botoesListItem.forEach((tag) => {
    tag.addEventListener('click', () => {
        trocarImagemBotãoAtivo(tag.classList);
        mudarBotaoAtivo(tag.classList[tag.classList.length - 2]);
    });
})

botaoTemporizador.addEventListener('click', tocarTemporizador);

mostrarTempo()