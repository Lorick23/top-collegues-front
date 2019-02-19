import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})

//Créer un composant ListeColleguesComponent qui, à partir d'une liste d'objets collègues, produit l'affichage suivant :
export class ListeColleguesComponentComponent implements OnInit {

  //@Input() collegues: Collegue[];
  collegues: Collegue[];
  @Input() pageIndex: number = 0;
  sliceStart = 0;
  sliceEnd = 3;

  constructor(private _data:DataService) { }

  ngOnChanges() {
    this.calculSlice(this.pageIndex);
  }

  ngOnInit() {
    this._data.lister().subscribe(
      value => this.collegues = value,
      error => console.log(error),
      () => console.log('terminé'));
  }

  calculSlice(pageIndex: number) {
    this.sliceStart = 0 + 3 * pageIndex;
    this.sliceEnd = 3 + 3 * pageIndex;
  }

}
