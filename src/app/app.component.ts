import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Animation Tests';
  darkTheme = false;
  sideNavOpen = false;

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
  }

}
