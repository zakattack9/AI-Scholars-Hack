import { Component, HostListener, OnInit } from '@angular/core';
import { BackendService } from 'src/Services/backend.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  clickout(event) {
    let checks = Array.from(document.getElementsByClassName('far'));
    if (checks.includes(event.target)) {
      event.target.classList.toggle('active');
    }
  }
  courses = [];
  grades = [];
  constructor(private backend: BackendService) {}

  ngOnInit() {
    return this.backend.getClasses().then(result => {
      for (let i = 0; i < Array.from(result).length; i++) {
        this.courses.push(result[i].class[0].toUpperCase() + result[i].class.slice(1));
        this.grades.push(result[i].grade.toUpperCase());
      }
    });
  }
}
