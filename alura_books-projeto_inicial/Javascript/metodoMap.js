function calcularLivrosComDesconto(livros){
    const desconto = 0.3
    let livrosComPrecoNovo = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComPrecoNovo;
}