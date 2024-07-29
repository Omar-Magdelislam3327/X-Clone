import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  shouldShowright(): boolean {
    const currentRoute = this.router.url.split('?')[0];
    const noSidebarRoutes = ['/messages'];
    return !noSidebarRoutes.includes(currentRoute);
  }
  shouldShowSidebars(): boolean {
    const currentRoute = this.router.url.split('?')[0];
    const noSidebarRoutes = ["/"];
    return !noSidebarRoutes.includes(currentRoute);
  }
}
