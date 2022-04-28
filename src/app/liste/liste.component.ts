import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
@Input() tabCandidats= [];
@Output() msgToCv= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
sendToCv(candidat){
  this.msgToCv.emit(candidat);
}
}
