import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { BlogPost } from '../blog.model';
import {BlogService} from '../../blog-service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#1d4ed8] pt-48 pb-20 px-4 sm:px-10">
      <div class="max-w-2xl mx-auto">

        <a routerLink="/blog"
           class="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-medium mb-10 transition-colors">
          ← Back to blog
        </a>

        <ng-container *ngIf="post; else notFound">
          <div class="flex items-center gap-2 mb-4 flex-wrap">
            <span class="text-xs font-bold uppercase tracking-widest text-indigo-300 bg-white/10 px-2.5 py-0.5 rounded-full">
              {{ post.category }}
            </span>
            <span class="text-xs text-blue-200">{{ post.date }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-2 mb-10 pb-8 border-b border-white/10">
            <div class="w-8 h-8 rounded-full bg-indigo-400/30 flex items-center justify-center text-white text-xs font-bold">
              {{ post.author[0] }}
            </div>
            <span class="text-sm font-medium text-blue-100">{{ post.author }}</span>
          </div>

          <!-- Rendered markdown -->
          <div class="blog-prose bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl"
               [innerHTML]="renderedContent">
          </div>

          <!-- Footer CTA -->
          <div class="mt-10 bg-white/10 border border-white/15 rounded-2xl p-6 text-center">
            <p class="text-white font-semibold text-lg mb-1">Have thoughts? Join the conversation.</p>
            <p class="text-blue-200 text-sm mb-4">We read everything in our Discord.</p>
            <a href="https://discord.gg/mZVAaz6F4" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Discord
            </a>
          </div>
        </ng-container>

        <ng-template #notFound>
          <div class="text-center text-white mt-20">
            <p class="text-2xl font-bold mb-2">Post not found</p>
            <a routerLink="/blog" class="text-blue-200 hover:text-white underline">Back to blog</a>
          </div>
        </ng-template>

      </div>
    </div>
  `,
  styles: [`
    .blog-prose :is(h2) {
      font-size: 1.35rem;
      font-weight: 700;
      color: #1e293b;
      margin: 2rem 0 0.75rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid #e2e8f0;
    }
    .blog-prose :is(h3) {
      font-size: 1.1rem;
      font-weight: 700;
      color: #334155;
      margin: 1.5rem 0 0.5rem;
    }
    .blog-prose :is(p) {
      color: #475569;
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    .blog-prose :is(ul, ol) {
      color: #475569;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.8;
    }
    .blog-prose :is(li) {
      margin-bottom: 0.35rem;
    }
    .blog-prose :is(strong) {
      color: #1e293b;
      font-weight: 600;
    }
    .blog-prose :is(code) {
      background: #f1f5f9;
      color: #4f46e5;
      font-size: 0.85em;
      padding: 0.15em 0.4em;
      border-radius: 4px;
      font-family: monospace;
    }
    .blog-prose :is(pre) {
      background: #1e293b;
      color: #e2e8f0;
      padding: 1rem 1.25rem;
      border-radius: 10px;
      overflow-x: auto;
      margin-bottom: 1rem;
    }
    .blog-prose :is(pre code) {
      background: none;
      color: inherit;
      padding: 0;
    }
    .blog-prose :is(blockquote) {
      border-left: 3px solid #6366f1;
      padding-left: 1rem;
      color: #64748b;
      font-style: italic;
      margin: 1.25rem 0;
    }
    .blog-prose :is(a) {
      color: #4f46e5;
      text-decoration: underline;
    }
    .blog-prose :is(hr) {
      border: none;
      border-top: 1px solid #e2e8f0;
      margin: 2rem 0;
    }
  `]
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  renderedContent = '';

  constructor(private route: ActivatedRoute, private blogService: BlogService,     private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = this.blogService.getBySlug(slug!);
    if (this.post) {
      this.renderedContent = await marked(this.post.content);
      this.cdr.detectChanges(); // 👈 and this
    }
  }
}
