import { Component } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';
import { FiltrarColegaDeTrabalhoPipe } from "../filtrar-colega-de-trabalho.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [CommonModule, FiltrarColegaDeTrabalhoPipe, FormsModule]
})
export class PrincipalComponent {

  // JSON
  pessoas:Pessoa[] = [];

  // Campos de filtragem (formulário)
  filtros = {
    nome: '',
    idade: '',
    estado: '',
    cidade: ''
  };

  // Inicialização
  ngOnInit(){

    // 1º objeto
    let obj1 = new Pessoa('Laura', 33, 'Paraná', 'Curitiba', false);
    // 2º objeto
    let obj2 = new Pessoa('Kevin', 17, 'São Paulo', 'Campinas', false);
    // 3º objeto
    let obj3 = new Pessoa('Fernanda', 26, 'Rio de Janeiro', 'Niterói', false);
    // 4º objeto
    let obj4 = new Pessoa('Otávio', 47, 'Rio Grande do Sul', 'Caxias do Sul', false);

    // Adicionar no JSON
    this.pessoas.push(obj1);
    this.pessoas.push(obj2);
    this.pessoas.push(obj3);
    this.pessoas.push(obj4);

  }

  // Função para marcar como colega de trabalho
  marcarComoColegaDeTrabalho(indice:number):void{
    
    // Alterar o status do colega de trabalho FALSE para TRUE
    this.pessoas[indice].colegaDeTrabalho = true;

  }

  // Função responsável por filtrar os dados
  pesquisa = (pessoa: any): any => {
    const nomeMatch = pessoa.nome.toLowerCase().includes(this.filtros.nome.toLowerCase()) || this.filtros.nome === '';
    const idadeMatch = pessoa.idade.toString().includes(this.filtros.idade) || this.filtros.idade === '';
    const cidadeMatch = pessoa.cidade.toLowerCase().includes(this.filtros.cidade.toLowerCase()) || this.filtros.cidade === '';
    const estadoMatch = pessoa.estado.toLowerCase().includes(this.filtros.estado.toLowerCase()) || this.filtros.estado === '';

    return nomeMatch && idadeMatch && cidadeMatch && estadoMatch;
  }

}
