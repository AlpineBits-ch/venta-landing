import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../ui/icon';
import { SUPPORT_URL } from '../../site-links';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="flex min-h-[70vh] items-center px-5 py-32 sm:px-8">
      <div class="mx-auto w-full max-w-xl">
        <!-- Placeholder mark: always referenced as a file, never inlined, so
             the real one drops in by replacing public/logo-mark.svg alone. -->
        <img src="logo-mark.svg" alt="" width="40" height="40" class="mb-6 h-10 w-10 opacity-80">
        <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">404</p>
        <h1 class="display mt-4 text-[2rem] text-text sm:text-[2.75rem]">
          There is nothing at this address.
        </h1>
        <p class="mt-5 leading-relaxed text-muted">
          The link may be out of date, or the page may have moved. These still work:
        </p>

        <div class="mt-8 flex flex-col divide-y divide-line-soft border-y border-line-soft">
          <a routerLink="/home" class="group flex items-center gap-3 py-4 transition-colors hover:text-text">
            <span class="text-[15px] text-muted transition-colors group-hover:text-text">Home and downloads</span>
            <app-icon name="arrowRight" class="ml-auto h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5" />
          </a>
          <a routerLink="/roadmap" class="group flex items-center gap-3 py-4 transition-colors hover:text-text">
            <span class="text-[15px] text-muted transition-colors group-hover:text-text">Roadmap</span>
            <app-icon name="arrowRight" class="ml-auto h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5" />
          </a>
          <a routerLink="/blog" class="group flex items-center gap-3 py-4 transition-colors hover:text-text">
            <span class="text-[15px] text-muted transition-colors group-hover:text-text">Blog</span>
            <app-icon name="arrowRight" class="ml-auto h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5" />
          </a>
          <a [href]="support" target="_blank" rel="noopener noreferrer"
             class="group flex items-center gap-3 py-4 transition-colors hover:text-text">
            <span class="text-[15px] text-muted transition-colors group-hover:text-text">Support</span>
            <app-icon name="externalLink" class="ml-auto h-4 w-4 text-faint" />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundComponent {
  protected readonly support = SUPPORT_URL;
}
