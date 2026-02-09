interface Livro{
    titulo: string;
    autor: string;
    anoPublicacao:number;
}

function resumirLivro (livro:Livro):string{
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`
}

const livroExemplo: Livro = {titulo: 'Harry Potter', autor:'J.K. Rowling', anoPublicacao: 1990} 


console.log(resumirLivro(livroExemplo))