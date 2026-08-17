import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadCorrida } from '../../models/CadastroCorrida';
import { CadastrocorridaService } from '../../service/cadastrocorrida.service';

@Component({
  selector: 'app-cadastrocorrida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrocorrida.component.html',
  styleUrls: ['./cadastrocorrida.component.css']
})
export class CadastroCorridaComponent {
  corrida: CadCorrida = new CadCorrida();

  constructor(private cadastrocorridaService: CadastrocorridaService) {}

  salvar() {
    console.log('Enviando dados:', this.corrida);

    this.cadastrocorridaService.salvar(this.corrida).subscribe({
      next: (resposta) => {
        console.log('Sucesso:', resposta);
        this.corrida = new CadCorrida(); // Limpa o formulário após salvar
      },
      error: (erro) => {
        console.error('Erro:', erro);
      }
    });
  }
}