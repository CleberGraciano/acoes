import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { EmpresasModule } from './empresas/empresas.module';
import { AcoesModule } from './acoes/acoes.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesExemplosComponent } from './components/pipes-exemplos/pipes-exemplos.component';
import { ObservableExemploComponent } from './components/observable-exemplo/observable-exemplo.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PipesExemplosComponent,
    ObservableExemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    EmpresasModule,
    AcoesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
