import { Injectable, NgModule } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Subject, Observable, from, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private voteSubject = new Subject<Vote>();

  get vote(): Observable<Vote> {
    return this.voteSubject.asObservable();
  }

  private listeCollegues: Collegue[] = [
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-17.jpg",
      score: 0,
      pseudo: "Batman"
    },
    {
      photoURL: "https://www.espacebuzz.com/assets/ckeditor/2015/jan/2317/originale/740_espacebuzz54ae61b2dceb9.jpg",
      score: 0,
      pseudo: "SonGoku"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-2.jpg",
      score: 0,
      pseudo: "Mario"
    },
    {
      photoURL: "http://artjuice.net/wp-content/uploads/2015/01/kim-jong-un-pop-culture-butcher-billy-20.jpg",
      score: 0,
      pseudo: "Kirby"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-3.jpg",
      score: 0,
      pseudo: "Ronald Mc Donald"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-14.jpg",
      score: 0,
      pseudo: "Teenky Winky"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-26.jpg",
      score: 0,
      pseudo: "Bart"
    },
    {
      photoURL: "https://artjuice.net/wp-content/uploads/2015/01/kim-jong-un-pop-culture-butcher-billy-1.jpg",
      score: 0,
      pseudo: "Pikachu"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-22.jpg",
      score: 0,
      pseudo: "HellBoy"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-18.jpg",
      score: 0,
      pseudo: "Hulk"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/81efd81fc769fcf88595dfc1d3054ec5.png",
      score: 0,
      pseudo: "Octopus"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-25.jpg",
      score: 0,
      pseudo: "Captain America"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-25.jpg",
      score: 0,
      pseudo: "Captain America"
    },
    {
      photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-9.jpg",
      score: 0,
      pseudo: "Einseinberg"
    }
  ];

  constructor(private _http: HttpClient) {
  }

  lister(): Observable<Collegue[]> {

    return of(this.listeCollegues);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    if (avis == Avis.AIMER) {
      collegue.score++;
    } else if (avis == Avis.DéTESTER) {
      collegue.score--;
    }
    this.voteSubject.next({ collegue, avis });
    return of(collegue);
  }

  disableButtons(collegue: Collegue, cases: string): boolean {
    if (cases == "like") {
      return collegue.score < 10;
    } else {
      return collegue.score > -10;
    }
  }
}
