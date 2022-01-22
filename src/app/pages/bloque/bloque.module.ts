import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { BloqueRoutingModule } from './bloque-routing.module';
import { BloqueComponent } from './bloque.component';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { AesComponent } from './aes/aes.component';
import { DesComponent } from './des/des.component';
import { TDesComponent } from './tdes/tdes.component';
import { SDesComponent } from './sdes/sdes.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    ngFormsModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    CommonComponentsModule,
    BloqueRoutingModule,
  ],
  declarations: [
    BloqueComponent,
    AesComponent,
    DesComponent,
    TDesComponent,
    SDesComponent,
  ],
})
export class BloqueModule { }
