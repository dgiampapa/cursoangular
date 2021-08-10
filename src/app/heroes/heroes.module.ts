import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // las declaraciones son todos los components que se van creando
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Los exports son las cosas que queeremos que sena visibles
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{
    
}