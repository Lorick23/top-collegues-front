import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit() {
  }

  deleteElement(index:number){
    this._data.deleteVote(index);
  }

}
