import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})

//Créer un composant ListeColleguesComponent qui, à partir d'une liste d'objets collègues, produit l'affichage suivant :
export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues: Collegue[];
  @Input() pageIndex: number = 0;
  sliceStart = 0;
  sliceEnd = 3;

  constructor() { }

  ngOnChanges() {
    this.calculSlice(this.pageIndex);
  }

  ngOnInit() {
  }

  calculSlice(pageIndex: number) {
    this.sliceStart = 0 + 3 * pageIndex;
    this.sliceEnd = 3 + 3 * pageIndex;
  }

}
