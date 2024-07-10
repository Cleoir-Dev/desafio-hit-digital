import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './intro/introduction/introduction.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    IntroductionComponent,
    ContactComponent,
    PageNotFoundComponent,
    RouterOutlet
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
