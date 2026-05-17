import { Injectable } from '@angular/core';
import {BlogPost} from './blog/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'who-we-are',
      title: 'Who we are and why we built Venta.GG',
      date: 'May 17, 2025',
      author: 'Dominic',
      category: 'About',
      summary: 'We\'re a small team of gamers who got tired of platforms that monetize your data. Here\'s our story.',
      content: `
## Where it started

It started not with a social app, but with a game - we're building something called *Fractured Echoes*. For that we needed a stable voice engine and messenger that could scale with it. We put an ungodly amount of time into getting WebRTC and text messaging to actually work the way we wanted.

## Why we opened it up

On Feb 9, 2026, Discord announced their policy changes. We moved our internal comms to our own tool - "Alpine" back then, the very early prototype of what became Venta.GG. We kept adding features to get back to parity with what we had, and at some point it clicked: we could open this to other people, help fund the game, and stress-test the platform at the same time.

## What we believe

Privacy isn't a feature, it's the point. We've added an initial MLS (E2EE) implementation for DMs - the server can't read your messages. We're still refining it, but that's the direction everything is heading.
`
    }
  ];

  getAll(): BlogPost[] { return this.posts; }
  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(p => p.slug === slug);
  }
}
