import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../ui/icon';
import { DISCORD_INVITE, DOCS_URL, GITHUB_URL, SUPPORT_URL, WEB_APP_URL } from '../../site-links';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  templateUrl: './header.html',
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly discord = DISCORD_INVITE;
  protected readonly github = GITHUB_URL;
  protected readonly docs = DOCS_URL;
  protected readonly support = SUPPORT_URL;
  protected readonly webApp = WEB_APP_URL;

  /**
   * The skip link, done by hand.
   *
   * The native jump is unusable here: `<base href="/">` makes href="#main"
   * resolve to "/#main", so the browser leaves whatever route the visitor is on
   * and the router redirects them to the home page. Focus is moved as well as
   * scrolled, because a skip link that only scrolls leaves the keyboard where it
   * was and skips nothing.
   */
  protected skipToMain(event: Event): void {
    const main = document.getElementById('main');
    if (!main) return;

    event.preventDefault();
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
    main.scrollIntoView();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  /** The mobile panel has no reason to stay open once the layout is desktop. */
  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
