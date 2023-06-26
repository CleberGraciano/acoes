import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-exemplo',
  templateUrl: './observable-exemplo.component.html',
  styleUrls: ['./observable-exemplo.component.css']
})
export class ObservableExemploComponent implements OnInit {
  ngOnInit(): void {
    this.objeto.subscribe(
      value => { console.log(value) }
    );
  }

  objeto = new Observable((observer) => {
    console.log('Aqui começa o Oservable');

    observer.next('1');
    observer.next('2');
    observer.complete();
    observer.next('4');
    observer.next('5');

  })

}
