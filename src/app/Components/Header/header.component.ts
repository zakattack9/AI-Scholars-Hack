import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showInfo = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    document.getElementById('modal-content');
    document.getElementById('modal');
    if (event.target === document.getElementById('modal')) {
      this.showInfo = !this.showInfo;
    }
  }
  constructor() {}

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }
  toggleSideBar() {
    document.getElementById('sidebar').classList.toggle('active');
  }
}
