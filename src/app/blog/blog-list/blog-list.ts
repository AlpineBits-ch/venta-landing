import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../blog.model';

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
  posts: BlogPost[] = [
    {
      slug: 'who-we-are',
      title: 'Who we are and why we built Venta.GG',
      date: 'May 17, 2025',
      author: 'The Venta Team',
      category: 'About',
      summary: 'We\'re a small team of gamers who got tired of platforms that monetize your data. Here\'s our story and what we\'re trying to build.',
      content: `
        <p>We're a small team of gamers and developers who got tired of the same thing: every platform we used was selling our data, stuffing ads into our chats, or locking us into ecosystems we didn't want.</p>
        <p>So we decided to build something different.</p>
        <h2>Where it started</h2>
        <p>This project started as a weekend experiment — a simple chat app with no tracking, no ads, no nonsense. It grew from there. We added WebRTC calls, guilds, end-to-end encryption, and a permission system that actually makes sense.</p>
        <h2>What we believe</h2>
        <p>Your conversations are yours. Full stop. We use MLS encryption on all private messages and calls so not even we can read them. We don't sell data, we don't run ads, and we don't plan to.</p>
        <h2>Where we're headed</h2>
        <p>We're still in beta — rough edges exist and we know it. But we ship fast, we listen to feedback, and we're building this in the open with our community. If that sounds interesting, come hang out on Discord and help us shape what Venta.GG becomes.</p>
      `
    },
    {
      slug: 'beta-launch',
      title: 'We\'re live in public beta',
      date: 'May 17, 2025',
      author: 'The Venta Team',
      category: 'Announcement',
      summary: 'Today we\'re opening Venta.GG to the public for the first time. Here\'s what works, what\'s broken, and what\'s coming next.',
      content: `
        <p>Today we're opening Venta.GG to anyone who wants to try it. This is a public beta — things will break, and that's okay.</p>
        <h2>What's working today</h2>
        <p>Instant messaging, WebRTC calls with up to 4 participants, guilds with channels and categories, friend relationships, and end-to-end encryption on all private conversations.</p>
        <h2>Known rough edges</h2>
        <p>Linux support is experimental. Mobile web is usable but not polished. Some guild permission edge cases are still being worked out.</p>
        <h2>How to help</h2>
        <p>Join our Discord, report bugs, tell us what's confusing, and tell us what you wish existed. Every piece of feedback goes directly to the people building this.</p>
      `
    }
  ];
}
