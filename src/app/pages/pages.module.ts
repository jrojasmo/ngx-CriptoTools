import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { GammaModule } from './gamma/gamma.module';
import { DialogoComponent } from './dialogo/dialogo.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    GammaModule,
    NbButtonModule,
  ],
  declarations: [
    PagesComponent,
    DialogoComponent
  ],
})
export class PagesModule {
}
