import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  @Input() recebeFamilia: any;

  valorAtual: string = '';
  valorSalvo = '';
  valorInicial = 15;

  public empresa =  {
    "id": 1,
    "nome": "Itau SA",
    "cnpj": "111111111",
    "tipoEmpresa": "privada",
    "data": "29/05/2023"
  }


  public alerta(e:object) {
    alert('Alerta: ' + e);
    console.log(e);
  }


  getValor(){
    return 1;
  }

  onMudouValor(evento : any){
    console.log(evento.novoValor);
  }


  constructor() { }

  ngOnInit() {
      console.log(this.recebeFamilia);
      
  }

}