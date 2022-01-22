import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfinComponent } from './afin/afin.component';

import { ClasicosComponent } from './clasicos.component';
import { DesplazamientoComponent } from './desplazamiento/desplazamiento.component';
import { HillComponent } from './hill/hill.component';
import { PermutacionComponent } from './permutacion/permutacion.component';
import { SustitucionComponent } from './sustitucion/sustitucion.component';
import { VigenereComponent } from './vigenere/vigenere.component';

const routes: Routes = [{
  path: '',
  component: ClasicosComponent,
  children: [
    {
      path: 'desplazamiento',
      component: DesplazamientoComponent,
    },
    {
      path: 'afin',
      component: AfinComponent,
    },
    {
      path: 'vigenere',
      component: VigenereComponent,
    },
    {
      path: 'sustitucion',
      component: SustitucionComponent,
    },
    {
      path: 'hill',
      component: HillComponent,
    },
    {
      path: 'permutacion',
      component: PermutacionComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasicosRoutingModule {
}
