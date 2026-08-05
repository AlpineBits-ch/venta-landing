import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';
import { BlogPost } from '../blog.model';
import { BlogService } from '../../../blog-service';
import { IconComponent } from '../../ui/icon';
import { DISCORD_INVITE } from '../../../site-links';

@Component({
  selector: 'app-blog-post',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div class="mx-auto max-w-2xl">

        <a routerLink="/blog"
           class="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text">
          <app-icon name="arrowRight" class="h-4 w-4 rotate-180" />
          All posts
        </a>

        @if (post(); as entry) {
          <article class="mt-10">
            <div class="flex flex-wrap items-center gap-3">
              <span class="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
                {{ entry.category }}
              </span>
              <span class="font-mono text-xs text-faint">{{ entry.date }}</span>
            </div>

            <h1 class="display mt-4 text-[2rem] text-text sm:text-[2.75rem]">{{ entry.title }}</h1>

            <div class="mt-6 flex items-center gap-2.5 border-b border-line-soft pb-8">
              <span class="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-card font-mono text-xs text-muted">
                {{ entry.author[0] }}
              </span>
              <span class="text-sm text-muted">{{ entry.author }}</span>
            </div>

            <div class="prose-dark mt-10" [innerHTML]="renderedContent()"></div>
          </article>

          <div class="mt-14 flex flex-col gap-3 rounded-xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-muted">
              <span class="font-medium text-text">Disagree, or spotted something wrong?</span>
              We would rather hear it.
            </p>
            <a [href]="discord" target="_blank" rel="noopener noreferrer"
               class="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-dim transition-colors hover:text-text">
              <app-icon name="discord" class="h-4 w-4" />
              Say so on Discord
            </a>
          </div>
        } @else {
          <div class="mt-20">
            <h1 class="display text-3xl text-text">That post isn't here.</h1>
            <p class="mt-4 text-muted">The link may be old, or the slug may have changed.</p>
            <a routerLink="/blog"
               class="mt-8 inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-card">
              Back to the blog
              <app-icon name="arrowRight" class="h-4 w-4 text-muted" />
            </a>
          </div>
        }

      </div>
    </section>
  `,
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly blog = inject(BlogService);

  protected readonly discord = DISCORD_INVITE;
  protected readonly post = signal<BlogPost | undefined>(undefined);
  protected readonly renderedContent = signal('');

  async ngOnInit(): Promise<void> {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = slug ? this.blog.getBySlug(slug) : undefined;
    this.post.set(found);

    if (found) {
      this.renderedContent.set(await marked(found.content));
    }
  }
}
