import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue, Avis } from '../models'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  likeActif = true;
  unlikeActif = true;

  constructor(private _data: DataService) { }

  ngOnInit() {

    this.likeActif = this._data.disableButtons(this.collegue, "like");
    this.unlikeActif = this._data.disableButtons(this.collegue, "unlike");
  }

  onVoted(avis: Avis) {
    this._data.donnerUnAvis(this.collegue, avis).subscribe(
      value => this.collegue = value
    );
    this.likeActif = this._data.disableButtons(this.collegue, "like");
    this.unlikeActif = this._data.disableButtons(this.collegue, "unlike");
  }
}
