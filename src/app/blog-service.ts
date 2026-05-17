import { Injectable } from '@angular/core';
import {BlogPost} from './blog/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'who-we-are',
      title: 'Who we are and why we built Venta.GG',
      date: 'May 17, 2025',
      author: 'The Venta Team',
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
    },
    {
      slug: 'beta-launch',
      title: 'We\'re live in public beta',
      date: 'May 17, 2025',
      author: 'The Venta Team',
      category: 'Announcement',
      summary: 'Today we\'re opening Venta.GG to the public. Here\'s what works, what\'s broken, and what\'s coming next.',
      content: `
## What's working today

Today we're opening Venta.GG to anyone who wants to try it. This is a public beta — things will break, and that's okay.

Here's what's solid right now:

- **Instant messaging** — fast, reliable, end-to-end encrypted
- **WebRTC calls** — video and audio with up to 4 participants
- **Guilds** — community spaces with channels, categories, and a permission system
- **Friend relationships** — add friends, start private conversations and calls

## Known rough edges

- Linux support is experimental — may not work on your distro yet
- Mobile web is usable but not polished
- Some guild permission edge cases are still being ironed out

## How to help

Join our Discord, report bugs, tell us what's confusing, and tell us what you wish existed. Every piece of feedback goes directly to the people building this.
      `
    }
  ];

  getAll(): BlogPost[] { return this.posts; }
  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(p => p.slug === slug);
  }
}
