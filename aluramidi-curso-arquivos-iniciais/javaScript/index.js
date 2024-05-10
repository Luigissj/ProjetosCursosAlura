    let todosBotoesTeclado = document.querySelectorAll(".teclado > *");
    let todosSons = document.querySelectorAll("audio");

    document.body.onkeydown = (e) => {
        let somTocar;
        switch(e.keyCode){
            case 105:
                somTocar = "tim"
                break;
            case 104:
                somTocar = "clap"
                break;
            case 103:
                somTocar = "pom"
                break;
            case 102:
                somTocar = "toim"
                break;
            case 101:
                somTocar = "splash"
                break;
            case 100:
                somTocar = "puff"
                break;
            case 99:
                somTocar = "tom"
                break;
            case 98:
                somTocar = "tic"
                break;
            case 97:
                somTocar = "psh"
                break;
        }
        tocarSom(somTocar);
        todosBotoesTeclado.forEach((botaoSom) => {
            if (botaoSom.classList.contains("focus")){
                botaoSom.classList.remove("focus");
            }
            let botaoClasses = botaoSom.className.split(" ");
            if (botaoClasses[1].includes(somTocar)){
                botaoSom.classList.add("focus");
                botaoSom.classList.add("ativa");
                setTimeout(() => {botaoSom.classList.remove("ativa")}, 150)
            }
        })
    }

    function tocarSom(classe){
        todosSons.forEach((item => {
            item.currentTime = 0;
            if (item.id.includes(classe)){
                item.play();
            } else {
                item.pause()
            }
        }))
    }

    todosBotoesTeclado.forEach((botao) => {botao.addEventListener("click", function (){let classesBotao = botao.className.split(" "); tocarSom(classesBotao[1])})});