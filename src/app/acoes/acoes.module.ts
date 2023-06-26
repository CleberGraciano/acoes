import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesFormComponent } from './acoes-form/acoes-form.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';





@NgModule({
  declarations: [
    AcoesFormComponent,
    AcoesListComponent
  ],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    AcoesFormComponent,
    AcoesListComponent
  ],
  providers: [BsDatepickerConfig],
})
export class AcoesModule { }
