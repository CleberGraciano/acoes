import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-parente',
  templateUrl: './parente.component.html',
  styleUrls: ['./parente.component.css']
})
export class ParenteComponent implements OnInit {
  @Input() public emp:any;
  @Output() public onAlert = new EventEmitter();

  public alertEvent(e: object) {
    this.onAlert.emit(e);
  }
 
  constructor() { }

  ngOnInit(): void { }
}