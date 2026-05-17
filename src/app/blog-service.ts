import { Injectable } from '@angular/core';
import {BlogPost} from './blog/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'initial-release-and-a-bit-of-story-time',
      title: 'Initial release and a bit of story time',
      date: 'May 17, 2025',
      author: 'Dominic',
      category: 'About',
      summary: 'How we went from building a game to building a discord alternative.',
      content: `


## Origins of Venta.GG

The beginning of what now became "Venta", started with the idea of creating a video game called <insert name here :D> about a fractured ring world drifting in space. Bla bla bla...
While brainstorming and working on the concept of our game, we realized that we needed a voice and social platform to go with it.<br>
 For us, trying to build that platform first sounded like a good idea, since we can figure out an architecture and a core server stack and then build our game networking around that. <br>
And if we're lucky, we can cross fund our game development with that platform. Paying creative people who do the assets and sounds costs money, after all.

## Where are we now?
Several days ago I started to get the word out about our project, initially on r/discordAlternatives and also on a RPG Subreddit.<br>
I found out that day, that there is a new discord clone popping up every day, so that kind of lowered my expectations a bit again. After all, why would people not believe that this is the next AI Slopware made in the basement of a 14 year old?<br>
After a bit of hesitation I published the post and it somehow got quite a bit of traction compared to the other posts in the subreddit, which was great!<br>
So we discussed internally on how to proceed. I'd like to get the app out the door as early as possible, but also with clear expectations.<br>
This is an initial release, and publishing it is a big risk for us, because the app is not polished and lacks a whole lot of features I'd like to have in.
However, I think opening up early means more feedback about it and more actionable items we can work on instead of building this in the background and then dropping it in a year.<br>So this brings me to the actual release announcement.

## Release notes for the initial version.

So.. where do I start. We have a whole lot of features but also a whole lot of featuren't. I have composed a list of what is working, and what is not below.

### What works TODAY.

 - Account management, you can sign up and in. Create your profile and
   message your friends.
 - Add friends, create chats and talk to them via WebRTC. Those chats *CAN* be E2EE, but that comes with a bit of drawback.
   I'll explain later.
- Create Guilds. Most of it works. You can create them, manage roles, add people from and to the roles and do whatever you want.
 - Guilds support messaging, voice chats, screen sharing, cam feeds. No member limit has been introduced as of now, that might change as
   we monitor the usage patterns. Chats in the guilds are not E2EE
   encrypted, this is very important for you to remember.
  - Theming. Yes, theming. You can change your font sizes and all the colors. You can even export them as json and import them elsewhere.
  - Ah and guilds support a Wiki, your domain knowledge should not be buried under 5000 messages anymore.

### What is in the featuren't list?

 - Member specific permissions in the guilds. You can add them to a role, but you can not add a member directly to a channel. I just didn't get around to fix this as of now.
 - Sometimes, when someone calls you and you accept, the accept doesn't reach the caller. Which leaves the callee and a call and the caller in a very weird state.
 - Connecting to the WebRTC stream takes around 3-4 seconds. I will try to get that number down, but debugging WebRTC stuff in a non chrome env. is a bit cumbersome. It's on the to-do list for later.
 - You can't edit your profile.
 - You can't delete your user - message me on dominic@alpinebits.ch if you want it deleted. No hard feelings! :-)
 - The whole UI experience is a bit unpolished, things that should work sometimes don't and CTRL + R is your best friend.
 - The Linux clients are a bit rusty. There is a non zero chance, that WebRTC doesn't work. I tried to fix it but didn't come around to test it. The whole window handling is weird on linux too, so windows is your best bet currently.
 - The web client is not ready either. We're working on it, but the priority is to get the native experience as good as possible before committing time to stub away some rust calls.
 - E2EE. I didn't find a better place to explain the drawbacks but tldr; You can't view those conversations from another device, you can't add the conversation TO another device, if you logout they are gone to you. We have some things ready to facilitate adding new devices and backup your private keys and MLS tree state, but that isn't wired up since I wanted to review it properly. You can, however, export the data as blob and then.. not import it. I'll put this on my list too. Best bet currently, is to not use E2EE - but that's up to you.

I think that's it. The current project will not replace discord for the most part, but it's valuable for us to get feedback on the current state and what people really want.

 ### Wait a minute, what about open source?
 Discussion about this is still on going internally. The current plan is to make everything source available so people can independently audit our code and our infra, but also allow them to selfhost. If we go the full OSS route, I can't tell yet and I don't want to promise. But you can surely drop your comments on that.
`
    }
  ];

  getAll(): BlogPost[] { return this.posts; }
  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(p => p.slug === slug);
  }
}
