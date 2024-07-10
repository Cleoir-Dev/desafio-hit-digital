import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageComponent } from '../components/image/image.component';
import { LineComponent } from '../components/line/line.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    ImageComponent,
    LineComponent,
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
