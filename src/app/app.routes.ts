import { Routes } from '@angular/router';

import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { AtletaComponent } from './component/atleta/atleta.component';
import { ComponentFixture } from '@angular/core/testing';
import { HomeComponentComponent } from './component/home-component/home-component.component';

export const routes: Routes = [

   

    
     {
        path: '',
        component: MenuComponentComponent
    },
    {
        path: 'atleta',
        component: AtletaComponent
    },
    {
        path: '',
        component: HomeComponentComponent
    
    }
];