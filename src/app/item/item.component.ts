import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() oneCandidat: Candidat;
@Output() msgToListe = new EventEmitter<Candidat>();
  constructor() { }

  ngOnInit(): void {
  }
sendToListe(){
  this.msgToListe.emit(this.oneCandidat);
}
}
