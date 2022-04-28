import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
listeCandidats: Candidat[]=[
new Candidat(1, 'Erij Maherzia', 'BEN BRAHIM', 25, 'full stack web developper', 'erij.jpg'),
new Candidat(2, 'Mouhamed Ismain', 'BOUDRIGA',29, 'full stack web developper' ,'ismail.jpg'),
new Candidat(3, 'Seif Eddine', 'TRABELSI', 27, 'full stack web developper', 'seif.jpg'),
new Candidat(4, 'Khadija', 'ZAIDI', 30, 'full stack web developper', 'kadija.jpg'),
new Candidat(5, 'Fadwa', 'MENDILY', 28, 'full stack web developper', 'fadoucha.jpg'),
new Candidat(6, 'Rana', 'GUESMI', 26, 'full stack web developper', 'ranoucha.jpg'),
];
selectedCandidat: Candidat;
  constructor() { }

  ngOnInit(): void {
  }
RecupCandidat(candidat){
  this.selectedCandidat=candidat;
  
}
}
