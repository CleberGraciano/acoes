import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { Router, ActivatedRoute } from '@angular/router';
import { AcoesService } from '../../acoes.service';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {

  empresa: Empresa = new Empresa();
  success : boolean = false;
  errors: String[] = [];
  id: number = 0;
  titulo: string = 'Minhas Ações';
  msg: string = 'Ação Salva com sucesso!!'
  


  onSubmit(){

  }
  ngOnInit() {
    
    }
 
}
