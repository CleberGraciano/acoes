import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    EmpresasListComponent,
    EmpresasFormComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    EmpresasListComponent,
    EmpresasFormComponent
  ]
})
export class EmpresasModule { }
