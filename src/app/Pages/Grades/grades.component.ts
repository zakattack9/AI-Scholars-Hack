import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {
  courses = ['Math', 'English', 'History', 'Science'];
  grades = ['B-', 'A+', 'C', 'A'];
  constructor() {}
}
