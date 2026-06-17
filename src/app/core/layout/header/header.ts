import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  irAlHome() {
    this.router.navigate(['/home']);
  }
}
