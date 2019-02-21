import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  matricule:string
  pseudo:string
  imgUrl:string

  constructor(private _data : DataService) { }

  ngOnInit() {
  }

  addCollegue(){
    this._data.addCollegue(this.matricule);
  }

}
