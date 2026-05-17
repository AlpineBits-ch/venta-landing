import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen: boolean = false;

  /**
   * Toggles the mobile menu open/closed state
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Closes the mobile menu when a navigation item is clicked
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  /**
   * Defensive Check: Automatically close the mobile menu drawer
   * if the window is resized larger than the mobile breakpoint (640px)
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth >= 640 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
