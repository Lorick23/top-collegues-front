import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue, Avis } from '../models'

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  likeActif = true;
  unlikeActif = true;

  constructor() {}

  ngOnInit() {}

  onVoted(avis: Avis) {
    if (avis == Avis.AIMER) {
      this.collegue.score++;
    } else if (avis == Avis.DéTESTER) {
      this.collegue.score--;
    }

    this.likeActif = this.collegue.score < 10;
    this.unlikeActif = this.collegue.score > -10;

    console.log(this.likeActif);
  }

}
