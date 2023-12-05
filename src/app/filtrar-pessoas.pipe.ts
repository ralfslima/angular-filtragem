import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPessoas',
  standalone: true
})
export class FiltrarPessoasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
