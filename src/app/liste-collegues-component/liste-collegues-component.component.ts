import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})

export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues: Collegue[];
  @Input() pageIndex: number = 0;
  sliceStart = 0;
  sliceEnd = 3;

  constructor(private _data: DataService) { }

  ngOnChanges() {
    this.calculSlice(this.pageIndex);
  }

  ngOnInit() {
    // this._data.refreshSub.subscribe(
    //   value => {
    //     this._data.lister().subscribe(
    //       value => {
    //         value.sort((a, b) => {
    //           if (a.pseudo > b.pseudo) {
    //             return 1;
    //           } else if (a.pseudo < b.pseudo) {
    //             return -1;
    //           } else {
    //             return 0;
    //           }
    //         });
    //         this.collegues = value
    //       },
    //       error => console.log(error));
    //   }
    // )
    
    this._data.lister().subscribe(
      value => {
        value.sort((a, b) => {
          if (a.pseudo > b.pseudo) {
            return 1;
          } else if (a.pseudo < b.pseudo) {
            return -1;
          } else {
            return 0;
          }
        });
        this.collegues = value
      },
      error => console.log(error));

  }

  calculSlice(pageIndex: number) {
    this.sliceStart = 0 + 3 * pageIndex;
    this.sliceEnd = 3 + 3 * pageIndex;
  }

}
