import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  user: object;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (
      event.target !== document.getElementById('sidebar') &&
      event.target.id !== 'overlay' &&
      document.getElementById('sidebar').className === 'active'
    ) {
      document.getElementById('sidebar').classList.toggle('active');
    }
  }

  constructor() {}

  isLoggedIn() {}

  toggleSideBar() {
    document.getElementById('sidebar').classList.toggle('active');
  }
}
