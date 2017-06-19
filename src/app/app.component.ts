import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Animation Tests';
  darkTheme: boolean = false;
  sideNavOpen: boolean = false;

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
  }

}
