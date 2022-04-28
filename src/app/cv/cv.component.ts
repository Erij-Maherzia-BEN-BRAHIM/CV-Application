import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
listeCandidats: Candidat[]=[
new Candidat(1, 'Erij', 'BEN BRAHIM', 25, 'ingénieure financière', 'erij.jpg'),
new Candidat(2, 'Ismain', 'BOUDRIGA',29, 'ingénieur halieutique' ,'ismail.jpg'),
new Candidat(3, 'SeifEddine', 'TRABELSI', 27, 'full stack web developper', 'seif.jpg')

];
selectedCandidat: Candidat;
  constructor() { }

  ngOnInit(): void {
  }
RecupCandidat(candidat){
  this.selectedCandidat=candidat;
  
}
}
