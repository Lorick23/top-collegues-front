import { Component, OnInit, Output } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})

export class AcceuilComponent implements OnInit {

  collegues: Collegue[] = new Array<Collegue>();
  pageIndex: number = 0;
  pages:number[] = new Array<number>();

  constructor() { }

  ngOnInit() {
    this.collegues = [
      {
        photoURL: "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        score: 0,
        pseudo: "DéDé"
      },
      {
        photoURL: "https://www.espacebuzz.com/assets/ckeditor/2015/jan/2317/originale/740_espacebuzz54ae61b2dceb9.jpg",
        score: 0,
        pseudo: "SonGoku"
      },
      {
        photoURL: "https://i.pinimg.com/236x/46/8a/5a/468a5a4ff18bdd1acfbf61475e47281f--monkey-d-luffy-one-piece.jpg?b=t",
        score: 0,
        pseudo: "Luffy"
      },
      {
        photoURL: "http://images6.fanpop.com/image/photos/39300000/Guts-berserk-manga-39375299-197-188.jpg",
        score: 0,
        pseudo: "Guts"
      },
      {
        photoURL: "https://vignette.wikia.nocookie.net/blame/images/b/be/Killy.png/revision/latest?cb=20170420234907",
        score: 0,
        pseudo: "Killy"
      },
      {
        photoURL: "http://www.stars-portraits.com/img/portraits/stars/z/zinedine-zidane/zinedine-zidane-by-Beesiak[203350].jpg",
        score: 0,
        pseudo: "Zizou"
      },
      {
        photoURL: "https://cdn.staticneo.com/w/finalfantasy/thumb/f/f7/Kefka3.jpg/160px-Kefka3.jpg",
        score: 0,
        pseudo: "Kefka"
      }
    ];
    for(let i:number=0; i < this.collegues.length/3; i++){
      this.pages[i]=i+1;
    }
  }

  changePage(page: number) {
    this.pageIndex = page-1;
  }

  onItemSelector() {

  }

}
