import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageComponent } from '../components/image/image.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { LineComponent } from '../components/line/line.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    ImageComponent,
    ButtonsComponent,
    LineComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
