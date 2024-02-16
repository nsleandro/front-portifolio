import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.sass']
})
export class MenuLeftComponent {
  menuOpened = true

  constructor(
    private router: Router,
  ) {

  }

  navigate(path: string) {
    this.router.navigate(['/' + path]);
  }

  openUrl(url: string) {
    window.open(url);
  }
}
