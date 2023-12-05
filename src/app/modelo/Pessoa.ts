// Modelo
export class Pessoa{

    // Atributos
    nome?:string;
    idade?:number;
    estado?:string;
    cidade?:string;
    colegaDeTrabalho?:boolean; // Equivale ao tarefa concluída

    // Construtor
    constructor(nome:string, idade:number, estado:string, cidade:string, colegaDeTrabalho:boolean){
        this.nome=nome;
        this.idade=idade;
        this.estado=estado;
        this.cidade=cidade;
        this.colegaDeTrabalho=colegaDeTrabalho;
    }
}