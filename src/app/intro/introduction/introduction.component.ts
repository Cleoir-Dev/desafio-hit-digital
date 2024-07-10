import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../backend/backend.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [RouterLink],
  providers: [BackendService],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  data: any;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getData().subscribe(response => {
      this.data = response.data;
    });
  }
}

