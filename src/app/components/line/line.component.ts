import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  @Input() title: string = "";
  @Input() className?: string = "line";
}
