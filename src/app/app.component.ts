import { Component } from '@angular/core';
import {Collegue} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  unCollegueExemple:Collegue = {
    //photoURL : "../../../assets/img/portrait.jpg/",
    photoURL : "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    score : 0,
    pseudo : "DéDé"
  };
}
