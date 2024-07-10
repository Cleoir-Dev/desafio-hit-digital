import { Routes } from '@angular/router';
import { IntroductionComponent } from './intro/introduction/introduction.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'introduction', component: IntroductionComponent },
    { path: 'contact', component: ContactComponent },
    { path: '',   redirectTo: 'introduction', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
