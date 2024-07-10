import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { RouterLink } from '@angular/router';
import { ImageComponent } from '../components/image/image.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { LineComponent } from '../components/line/line.component';
import { ApiResponse } from '../../models/api-response.model';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    RouterLink,
    ImageComponent,
    ButtonsComponent,
    LineComponent,
  ],
  providers: [BackendService],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements OnInit {
  
  readonly SUCCESS: string = 'success';
  
  response: ApiResponse;

  constructor(private backendService: BackendService) {
    this.response = {
      status: '',
      data: {
        title: '',
        text: '',
      }
    }
  }

  ngOnInit(): void {
    this.backendService.getData().subscribe((response: ApiResponse) => {
      if(response.status == this.SUCCESS) {
        this.response = {
          status: response.status,
          data: response.data,
        };
      }   
    });
  }
}
