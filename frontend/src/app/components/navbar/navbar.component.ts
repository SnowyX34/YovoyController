import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    console.log('Cerrando sesión...');
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
