import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicaComponent } from './publica.component';
import { RsaComponent } from './rsa/rsa.component';



const routes: Routes = [{
  path: '',
  component: PublicaComponent,
  children: [
    {
      path: 'rsa',
      component: RsaComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicaRoutingModule {
}
