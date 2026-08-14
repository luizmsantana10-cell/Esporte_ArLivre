import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { AtletaComponent } from './component/atleta/atleta.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CorridaComponent } from './component/corrida/corrida.component';
import { CadastrocorridaComponent } from './component/cadastrocorrida/cadastrocorrida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponentComponent, AtletaComponent, HomeComponentComponent, CorridaComponent,CadastrocorridaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsporteArLivre';
}
