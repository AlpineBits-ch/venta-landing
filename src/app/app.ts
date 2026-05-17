import {Component, HostListener, signal} from '@angular/core';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('alpine-angular-landing');
  isOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeDropdown();
  }
}
