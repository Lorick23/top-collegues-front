import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  votes: Vote[] = Array<Vote>();
  randomColor: number;
  histSection: HTMLElement;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.vote.subscribe(
      value => {
        this.votes.push(value);
        this.histSection = document.getElementById('histSection' + (this.votes.length - 2));
        console.log(this.histSection + " " +"histSection" + (this.votes.length - 2));
      },
      error => console.log(error))
  }

  deleteElement(index: number) {
    this.votes.splice(index, 1);
  }

  getRandomColor(html: HTMLElement) {
    this.randomColor = Math.floor(Math.random() * Math.floor(1));
    if (this.randomColor === 0) {
      html.className = "silver";
    } else if (this.randomColor === 1) {
      html.className = "blue";
    }
  }
}
