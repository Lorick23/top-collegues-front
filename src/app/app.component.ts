import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'top-collegues-front';
  // msg= '';

  // constructor(private _data:DataService){}

  ngOnInit(){

  }
}