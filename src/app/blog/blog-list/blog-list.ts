import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../blog.model';
import {BlogService} from '../../blog-service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#1d4ed8] pt-48 pb-20 px-4 sm:px-10">
      <div class="max-w-3xl mx-auto">

        <!-- Page header -->
        <div class="mb-12 text-center">
          <span class="bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            Blog & Updates
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Who we are & what we're building
          </h1>
          <p class="text-blue-100 text-lg max-w-xl mx-auto">
            Updates, decisions, and behind-the-scenes from the Venta.GG team.
          </p>
        </div>

        <!-- Posts -->
        <div class="flex flex-col gap-6">
          <a *ngFor="let post of posts"
             [routerLink]="['/blog', post.slug]"
             class="block bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-200 group">
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                {{ post.category }}
              </span>
              <span class="text-xs text-slate-400">{{ post.date }}</span>
            </div>
            <h2 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">{{ post.summary }}</p>
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">
                {{ post.author[0] }}
              </div>
              <span class="text-sm font-medium text-slate-700">{{ post.author }}</span>
              <span class="ml-auto text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Read more →
              </span>
            </div>
          </a>
        </div>

      </div>
    </div>
  `
})
export class BlogListComponent {
  posts: BlogPost[];
  constructor(private blogService: BlogService) {
    this.posts = this.blogService.getAll();
  }
}
