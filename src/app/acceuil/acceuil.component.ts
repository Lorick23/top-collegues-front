import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})

export class AcceuilComponent implements OnInit {

  pageIndex: number = 0;
  pages: number[] = new Array<number>();
  collegues: Collegue[];

  constructor(public _data: DataService) { }

  ngOnInit() {
    this._data.lister().subscribe(
      value => {
        for (let i: number = 0; i < value.length / 3; i++) {
          this.pages[i] = i + 1;
        }
      },
      error => console.log(error));
  }

  changePage(page: number) {
    this.pageIndex = page - 1;
  }

  refresh() {
    this._data.refresh().subscribe(
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
      error => console.log(error)
    );
  }

}
