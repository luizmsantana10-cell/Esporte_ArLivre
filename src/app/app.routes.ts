import { Routes } from '@angular/router';


import { AtletaComponent } from './component/atleta/atleta.component';
import { ComponentFixture } from '@angular/core/testing';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CorridaComponent } from './component/corrida/corrida.component';
import { CadastrocorridaComponent } from './component/cadastrocorrida/cadastrocorrida.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:"home",
        pathMatch:"full"
    
    },

    {
        path: 'home',
        component: HomeComponentComponent
    
    },
    {
        path: 'atleta',
        component: AtletaComponent
    },
    {
        path: 'cadastrocorrida',
        component: CadastrocorridaComponent
    }
   
];