import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from './modelo/Pessoa';

@Pipe({
  name: 'filtrarColegaDeTrabalho',
  standalone: true,
  pure: false //ADICIONE ESSA LINHA
})
export class FiltrarColegaDeTrabalhoPipe implements PipeTransform {

  transform(vetorPessoas:any[]): any[] {
    return vetorPessoas.filter(p => {return p.colegaDeTrabalho == false});
  }

}
