import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  votes:Vote[] = Array<Vote>();

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.vote.subscribe(
      value => {
        this.votes.push(value)
        console.log(this.votes)
      },
      error => console.log(error))
    
  }

  deleteElement(index:number){
    this.votes.splice(index, 1);
  }
}
