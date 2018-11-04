import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {
  @HostListener('document:click', ['$event'])
  clickout(event) {
    let checks = Array.from(document.getElementsByClassName('far'));
    if (checks.includes(event.target)) {
      event.target.classList.toggle('active');
    }
  }
  courses = ['Math', 'English', 'History', 'Science'];
  grades = ['B-', 'A+', 'C', 'A'];
  constructor() {}
}
