import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplos',
  templateUrl: './pipes-exemplos.component.html',
  styleUrls: ['./pipes-exemplos.component.css']
})
export class PipesExemplosComponent implements OnInit {
  livro: any = {
    titulo: 'Aprendendo Estrutura de dados',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://rafaelsimonato.dev'
  }

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
