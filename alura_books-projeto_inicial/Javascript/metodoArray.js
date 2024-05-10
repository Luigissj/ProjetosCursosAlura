const secaoLivros = document.querySelector("#livros");
let int = 1;

function exibirLivrosUI(listaLivros){
    listaLivros.forEach(informacoesLivro => {
        secaoLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${informacoesLivro.imagem}" alt="${informacoesLivro.alt}" />
            <h2 class="livro__titulo">
            ${informacoesLivro.titulo}
            </h2>
            <p class="livro__descricao">${informacoesLivro.autor}</p>
            <p class="livro__preco" id="preco">R$${informacoesLivro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${informacoesLivro.categoria}</span>
            </div>
        </div>
        ` 
    });
}