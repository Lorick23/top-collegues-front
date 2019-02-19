import { Component, OnInit, OnChanges } from '@angular/core';
import { Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {

  vote: Vote[] = Array<Vote>();

  constructor(private _data: DataService) { }

  ngOnInit() {
    if(localStorage.getItem("voteCount") != null){
      this.vote = JSON.parse(localStorage.getItem("voteCount"));
    }
    this._data.vote.subscribe(
      value => {
        this.vote.push(value);
        localStorage.setItem("voteCount", JSON.stringify(this.vote));
      },
      err => console.log(err));
  }

}
