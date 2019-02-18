import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ScorePipe } from './pipes/score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AcceuilComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }