import { Component } from '@angular/core';
import { HOME_NAV_LINKS } from '../../../constant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nav_links = HOME_NAV_LINKS;
  notifications = faBell;
  sun = faSun;
  moon = faMoon;
  isDropdownOpen = false;
  isDrawerOpen: boolean = true;


  constructor(private router: Router) {
    router.navigate(['/home/overview'])
  }


  toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

}
