import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../blog.model';
import { BlogService } from '../../../blog-service';
import { IconComponent } from '../../ui/icon';

@Component({
  selector: 'app-blog-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div class="mx-auto max-w-3xl">

        <div class="max-w-2xl">
          <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Blog</p>
          <h1 class="display mt-4 text-[2.25rem] text-text sm:text-[3rem]">
            What we changed, and why.
          </h1>
          <p class="mt-5 text-[17px] leading-relaxed text-muted">
            Release notes, decisions, and the reasoning behind them.
          </p>
        </div>

        <div class="mt-14 flex flex-col">
          @for (post of posts; track post.slug) {
            <a [routerLink]="['/blog', post.slug]"
               class="group border-t border-line-soft py-8 transition-colors last:border-b hover:bg-card/40">
              <div class="flex flex-wrap items-center gap-3">
                <span class="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
                  {{ post.category }}
                </span>
                <span class="font-mono text-xs text-faint">{{ post.date }}</span>
              </div>

              <h2 class="mt-3 text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-brand-dim">
                {{ post.title }}
              </h2>
              <p class="mt-2 leading-relaxed text-muted">{{ post.summary }}</p>

              <div class="mt-4 flex items-center gap-2.5">
                <span class="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-card font-mono text-[11px] text-muted">
                  {{ post.author[0] }}
                </span>
                <span class="text-sm text-muted">{{ post.author }}</span>
                <span class="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dim">
                  Read
                  <app-icon name="arrowRight" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          } @empty {
            <p class="border-t border-line-soft py-8 text-muted">Nothing published yet.</p>
          }
        </div>

      </div>
    </section>
  `,
})
export class BlogListComponent {
  private readonly blog = inject(BlogService);
  protected readonly posts: BlogPost[] = this.blog.getAll();
}
