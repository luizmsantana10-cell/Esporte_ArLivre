import { Component, signal } from '@angular/core';
// Importe outros módulos ou componentes que este componente precise usar
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atleta-lista',
  standalone: true, // <-- ADICIONE ESTA LINHA
  imports: [],      // <-- ADICIONE ESTA LINHA (coloque CommonModule aqui se usar ngIf, ngClass, etc)
  templateUrl: './atleta-lista.component.html',
  // styleUrl: './atleta-lista.component.css' (se houver arquivo de estilo)
})
export class AtletaListaComponent {
  
  // Seu código existente...
  listaAtletas = signal<any[]>([]); 

  carregaDadosAtletaForm(atleta: any) {
    console.log('Atleta selecionado:', atleta);
    // ...
  }

  excluir(id: number) {
    // ...
  }
}