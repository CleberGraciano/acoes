import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from '../components/tabela/tabela.component';
import { ParenteComponent } from '../components/parente/parente.component';
import { TituloComponent } from '../components/titulo/titulo.component';

@NgModule({
  declarations: [
    EmpresasListComponent,
    EmpresasFormComponent,
    TabelaComponent,
    ParenteComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule
  ],
  exports: [
    EmpresasListComponent,
    EmpresasFormComponent
  ]
})
export class EmpresasModule { }
