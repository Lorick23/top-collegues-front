import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Subject, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { listener } from '@angular/core/src/render3';

const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

interface CollegueServeur {
  id: number;
  name: string;
  photoUrl: string;
  score: number;
}

const colServeurToColIhm = unColServeur => <Collegue>{
  pseudo: unColServeur.name,
  photoURL: unColServeur.photoUrl,
  score: unColServeur.score
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private voteSubject = new Subject<Vote>();

  get vote(): Observable<Vote> {
    return this.voteSubject.asObservable();
  }

  private refreshSubject = new Subject<Collegue[]>();

  get getSubRefresh(): Observable<Collegue[]> {
    return this.refreshSubject.asObservable();
  }

  constructor(private _http: HttpClient) {
  }

  lister(): Observable<Collegue[]> {
    if (this.listeCollegues.length > 0) {
      return of(this.listeCollegues);
    } else {
      return this._http.get<CollegueServeur[]>(URL_BACKEND + "/collegues")
        .pipe(
          map(
            colsServeur => colsServeur.map(colServeurToColIhm))
          ,
          tap(tab => {
            this.listeCollegues = tab;
          })
        );
    }
  }

  addCollegue(matricule: string, pseudo: string, photo: string) {
    return this._http.post(URL_BACKEND + "/collegues", { "matricule": matricule, "pseudo": pseudo, "photo": photo }, httpOptions);
  }

  refresh(): Observable<Collegue[]> {
    this.listeCollegues = [];
    return this.lister();
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {

    return this._http.patch<CollegueServeur>(URL_BACKEND + "/collegues/" + collegue.pseudo, { action: avis }, httpOptions)
      .pipe(
        map(colServeurToColIhm),
        tap(col => {
          this.voteSubject.next({ collegue: col, avis })
        })
      );
  }

  disableButtons(collegue: Collegue, cases: string): boolean {
    if (cases == "like") {
      return collegue.score < 10;
    } else {
      return collegue.score > -10;
    }
  }

  private listeCollegues: Collegue[] = [
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-17.jpg",
    //   score: 0,
    //   pseudo: "Batman"
    // },
    // {
    //   photoURL: "https://www.espacebuzz.com/assets/ckeditor/2015/jan/2317/originale/740_espacebuzz54ae61b2dceb9.jpg",
    //   score: 0,
    //   pseudo: "SonGoku"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-2.jpg",
    //   score: 0,
    //   pseudo: "Mario"
    // },
    // {
    //   photoURL: "http://artjuice.net/wp-content/uploads/2015/01/kim-jong-un-pop-culture-butcher-billy-20.jpg",
    //   score: 0,
    //   pseudo: "Kirby"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-3.jpg",
    //   score: 0,
    //   pseudo: "Ronald Mc Donald"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-14.jpg",
    //   score: 0,
    //   pseudo: "Teenky Winky"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-26.jpg",
    //   score: 0,
    //   pseudo: "Bart"
    // },
    // {
    //   photoURL: "https://artjuice.net/wp-content/uploads/2015/01/kim-jong-un-pop-culture-butcher-billy-1.jpg",
    //   score: 0,
    //   pseudo: "Pikachu"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-22.jpg",
    //   score: 0,
    //   pseudo: "HellBoy"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-18.jpg",
    //   score: 0,
    //   pseudo: "Hulk"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/81efd81fc769fcf88595dfc1d3054ec5.png",
    //   score: 0,
    //   pseudo: "Octopus"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-25.jpg",
    //   score: 0,
    //   pseudo: "Captain America"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-25.jpg",
    //   score: 0,
    //   pseudo: "Captain America"
    // },
    // {
    //   photoURL: "http://media.topito.com/wp-content/uploads/2015/01/kim-jong-un-pop-culture-9.jpg",
    //   score: 0,
    //   pseudo: "Einseinberg"
    // }
  ];
}
