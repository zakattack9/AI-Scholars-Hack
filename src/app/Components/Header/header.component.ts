import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}
  showInfo = false;
  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }
  toggleSideBar() {
    document.getElementById('sidebar').classList.toggle('active');
  }
}
