interface Usuario{
    nome: string;
    email: string;
    exibirInfo: () => string;
}
 const testUser: Usuario = {
    nome:'Augusto',
    email:'augustobrigida060@gmail.com',
    exibirInfo(){
        return `Nome: ${this.nome} - Email: ${this.email}`
    }
 }

 console.log(testUser.exibirInfo());