import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  matricule: string
  pseudo: string
  imgUrl: string

  constructor(private _data: DataService, private router: Router) { }

  ngOnInit() {
  }

  addCollegue() {
    console.log(this.imgUrl);
    this._data.addCollegue(this.matricule, this.pseudo, this.imgUrl).subscribe(
      value => {
        this._data.refresh();
        this.router.navigate(['/acceuil'])
      }
    );
  }

}
