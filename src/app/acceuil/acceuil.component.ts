import { Component, OnInit, Output } from '@angular/core';
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

  onItemSelector() {

  }

  refresh() {
    window.location.reload();
  }

}
