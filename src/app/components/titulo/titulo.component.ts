import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  @Input('nome') titulo: string = '';

  constructor() { }

  ngOnInit() {

    console.log(this.titulo);
    console.log('RespostaSucesso recebido do component pai via Input: ', this.titulo);
  }

}