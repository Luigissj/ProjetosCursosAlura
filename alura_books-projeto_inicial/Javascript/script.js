let livros = [];
const linkDadosLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
receberDadosLivros();

async function receberDadosLivros(){
    const valoresLivros = await fetch(linkDadosLivros);
    livros = await valoresLivros.json()
    let livrosComDesconto = calcularLivrosComDesconto(livros);
    console.table(livros);
    exibirLivrosUI(livrosComDesconto);
}