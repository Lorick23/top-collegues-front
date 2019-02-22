import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';


export const ROUTES: Routes = [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'form', component: NouveauCollegueTemplateFormComponent },
    { path: '', pathMatch: 'full', redirectTo: '/acceuil' },
];