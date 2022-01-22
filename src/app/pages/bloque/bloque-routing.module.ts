import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AesComponent } from './aes/aes.component';

import { BloqueComponent } from './bloque.component';
import { DesComponent } from './des/des.component';
import { SDesComponent } from './sdes/sdes.component';
import { TDesComponent } from './tdes/tdes.component';


const routes: Routes = [{
  path: '',
  component: BloqueComponent,
  children: [
    {
      path: 'sdes',
      component: SDesComponent,
    },
    {
      path: 'des',
      component: DesComponent,
    },
    {
      path: 'tdes',
      component: TDesComponent,
    },
    {
      path: 'aes',
      component: AesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloqueRoutingModule {
}
