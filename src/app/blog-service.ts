import { Injectable } from '@angular/core';
import {BlogPost} from './components/blog/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'three-rough-months-and-a-much-longer-list',
      title: 'Three rough months and a much longer list',
      date: 'August 5, 2026',
      author: 'Dominic',
      category: 'Update',
      summary: 'Self hosting, federation, E2EE that actually works across devices, and a native The Isle integration.',
      content: `


## Where we've been

So.. it has been about three months since the last post, and I am not going to pretend they were easy ones. Rough is the honest word for it.<br>
But we have been heads down the entire time, and the client you can download today has very little in common with the one I wrote about in May.

tldr; a lot shipped, the biggest drawbacks from the last post are gone, and we picked up a game integration along the way.

## What works TODAY

The big ones first, because these are the ones people kept asking about.

- **Self hosting.** You can run your own instance. You sign in as \`you@yourserver.tld\` from the same client and nothing about the app changes - same guilds, same calls, same encryption, on your hardware.
- **Federation.** Instances can talk to each other. An admin starts a handshake, the other side accepts automatically or on review, and either side can defederate later. That is a normal thing to do, not an escape hatch.
- **E2EE, properly this time.** Private conversations and calls are MLS encrypted, and guild channels can have it switched on per channel now. More importantly the device story is fixed: you can add a device without losing your history, and you can actually back up and restore your key material. That was the single biggest drawback I listed in May and it is gone.
- **Several accounts at once**, on several servers, and you can switch without signing out.
- **Discord import**, so you do not have to start in an empty room.

And then the pile of things that landed while we were in there: wiki, forum channels, scheduled events, moderation tools with reports and bans and an audit log, guest access, quiet hours, custom emoji, reactions and replies, link previews, bots you can install into a guild, rich presence that picks up what you are playing including from Steam, themes you can export as JSON, and English, German and French.

Also you can edit your profile now. I know. It only took three months.

## The Isle

Somewhere in the middle of all that we built a native The Isle integration for our own server. Proximity voice - the people near you in the game are the people you hear, and it follows you around instead of being a separate channel you have to remember to join.

If you self host: it is opt in and off by default. I am not going to ship a game integration to people who never asked for one.

## The featuren't list

Still here, still honest.

 - The native mobile app is in internal testing right now. It is not something you can download yet.
 - Guild webhooks are in progress.
 - Linux ships for Debian, Ubuntu, Fedora and RHEL, but window handling and voice still need work. Windows is still the smoother ride.
 - The web client is planned and not started.
 - A public API for building your own clients is planned.
 - New sound design - an actual audio designer, one who knows what he is doing, is redoing every sound in the app. This one I am genuinely excited about.

## Where the project stands

It is still a beta and it still behaves like one. Things break, we fix them, we ship again - often. What changed is that the foundation is not a question mark anymore. Self hosting and federation were the two things that made this project worth doing instead of being clone number six hundred, and they both work now.

While I am at it, because it comes up and it should not be something you have to go digging for: the backend is open source, under AGPL-3.0. If you are going to trust something with your messages you should be able to read it first, and if you host it for other people, they get that same right from you. The mobile app, the Isle bridge and this website are public too. The desktop client is not, yet.

Same as last time: if something is broken, tell us. It gets read.`,
    },
    {
      slug: 'initial-release-and-a-bit-of-story-time',
      title: 'Initial release and a bit of story time',
      date: 'May 17, 2026',
      author: 'Dominic',
      category: 'About',
      summary: 'How we went from building a game to building a discord alternative.',
      content: `


## Origins of Venta.GG

The beginning of what now became "Venta", started with the idea of creating a video game about a fractured ring world drifting in space.<br>
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
