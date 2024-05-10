var string = "valor";

function mudarCorFundo2(tag, cor){
    tag.style.backgroundColor = cor;
    if (cor == '#000000'){
        tag.style.color = '#ffffff';
    } else {
        tag.style.color = '#000000';
    }
}

function mudarCorFundo(tag){
    document.body.style.backgroundColor = tag.value;
}

function trocarMensagem(id, mensagem){
    id.textContent = mensagem;
}

function mudarCorFundoTexto(tag, cor){
    tag.style.color = cor;
}

function aparecerMensagem (mensagem) {
    alert(mensagem);
}

function trocarMensagem(id, texto){
    if (!id.includes('#')){
    }
    id = document.querySelector(id);
}

/*
    <div class="Conteudo">
        <input type="color" name="Cor" id="CorPrincipal" value="#ffffff" oninput="mudarCorFundo(this)">
        <p class="textoCor">Mude a cor acima para mudar a cor do fundo</p>
        <P class="Caixa_content" onclick="trocarMensagem(this.class, 'Parabens 😁')" ondblclick="trocarMensagem(this.class, 'EU DISSE SÓ UMA VEZ!🤬🤬🤬')">Não me clique uma vez, somente duas vezes</p>
        <section class="areaDosTextArea">
            <textarea class="textoArea" name="texto" id="textoMouseMexer" cols="30" rows="10" placeholder="Mexe o mouse aqui" readonly onmousemove="mudarCorFundoTexto(this.id ,'#0000ff')"></textarea>
            <input id="botaoMouseMexer" type="button" value="Preto" onmousedown="mudarCorFundo(this, '#000000')" onmouseup="mudarCorFundo(this, '#ffffff')">
            <textarea class="textoArea" name="" id="textoTriste" cols="30" rows="10" readonly>Por favor, clique no botão abaixo, ele está muito triste😥😥😥</textarea>
            <button id="botaoTriste" onkeypress="aparecerMensagem('Obrigado por me clicar'), trocarMensagem('#textoTriste', 'Obrigado por clicar nele, parece estar muito melhor!'), trocarMensagem(this.id, '🙂')">😓</button>
            <textarea class="textoArea" name="" id="textoCorNeutra" cols="30" rows="10" readonly onkeydown="mudarCorFundoTexto(this, '#ffffff'), trocarMensagem(this.id, 'Agora, large o botão para me deixar mais claro')" onkeyup="mudarCorFundoTexto(this.id, '#000000'), trocarMensagem(this.id, 'Pressione o botão C para poder me tornar escuro')">Pressione o botão 'C' para poder me tornar escuro</textarea>
        </section>
        <p id="naoMeFoque" onfocus="mudarCorFundo(this, '#ff0000')" onblur="mudarCorFundo()">Se me focar, meu pai body ficará com raiva! 😡😡😡</p>
        <input type="email" name="" id="naoMeMude" value="Não me mude" onchange="mudarCorFundo('#00ff00')">
        <img id="imagemCarregar" src="Yippie.jpg" alt="" onload="aparecerMensagem('yippie')" onunload="trocarImagem(this), aparecerMensagem('holla molla')">
        <input id="enviarFormulario" type="submit" value="mandar" onsubmit="aparecerMensagem('Formulário enviado com sucesso')">
    </div>
*/