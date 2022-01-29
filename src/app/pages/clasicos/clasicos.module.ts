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
import { ClasicosComponent } from './clasicos.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DesplazamientoComponent } from './desplazamiento/desplazamiento.component';
import { ClasicosRoutingModule } from './clasicos-routing.module';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { AfinComponent } from './afin/afin.component';
import { VigenereComponent } from './vigenere/vigenere.component';
import { HillComponent } from './hill/hill.component';
import { SustitucionComponent } from './sustitucion/sustitucion.component';
import { PermutacionComponent } from './permutacion/permutacion.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    ngFormsModule,
    NbButtonModule,
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
    ClasicosRoutingModule,
  ],
  declarations: [
    ClasicosComponent,
    DesplazamientoComponent,
    AfinComponent,
    VigenereComponent,
    HillComponent,
    SustitucionComponent,
    PermutacionComponent
  ],
})
export class ClasicosModule { }
