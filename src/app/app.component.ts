import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bilder-quiz';
  public isCollapsed = true;

  constructor(public router: Router) {
  }
  refresh() {
    this.router.navigate(['/home']);
  }
}
