import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesFormComponent } from './acoes-form/acoes-form.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { FormsModule } from '@angular/forms';
import { TituloComponent } from '../components/titulo/titulo.component';


@NgModule({
  declarations: [
    AcoesFormComponent,
    AcoesListComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    FormsModule
  ],
  exports: [
    AcoesFormComponent,
    AcoesListComponent
  ]
})
export class AcoesModule { }
