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

We're a small team of gamers and developers who got tired of the same thing: every platform we used was selling our data, stuffing ads into our chats, or locking us into ecosystems we didn't want.

So we decided to build something different.

## What we believe

Your conversations are yours. Full stop. We use MLS encryption on all private messages and calls so not even we can read them. We don't sell data, we don't run ads, and we don't plan to.

## Where we're headed

We're still in beta — rough edges exist and we know it. But we ship fast, we listen to feedback, and we're building this in the open with our community. If that sounds interesting, come hang out on Discord and help us shape what Venta.GG becomes.
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
