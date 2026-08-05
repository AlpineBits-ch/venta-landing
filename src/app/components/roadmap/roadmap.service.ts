import { Injectable } from '@angular/core';
import { RoadmapItem, RoadmapStatus } from './roadmap.model';

/**
 * Statuses here are meant to match the client you can download, not the one we
 * wish we had shipped. Anything marked `done` is reachable in the current build.
 */
@Injectable({ providedIn: 'root' })
export class RoadmapService {
  private items: RoadmapItem[] = [
    // ── Shipped ───────────────────────────────────────────────────────────
    {
      id: 'e2e-encryption',
      title: 'End-to-end encryption',
      description: 'MLS for private conversations and calls, and switchable per guild channel.',
      status: 'done',
      category: 'Security',
    },
    {
      id: 'key-backup',
      title: 'Device keys and backup',
      description: 'Register new devices and restore key material instead of losing your history.',
      status: 'done',
      category: 'Security',
    },
    {
      id: 'mfa',
      title: 'Two-factor authentication',
      description: 'Account 2FA, plus signing in from another device by QR code.',
      status: 'done',
      category: 'Security',
    },
    {
      id: 'self-hosting',
      title: 'Self-hosting',
      description: 'Run your own instance and sign in as you@your-server from the same client.',
      status: 'done',
      category: 'Platform',
    },
    {
      id: 'federation',
      title: 'Federation',
      description: 'Instances handshake, admins accept automatically or on review, and either side can defederate.',
      status: 'done',
      category: 'Platform',
    },
    {
      id: 'multi-account',
      title: 'Several accounts at once',
      description: 'Hold accounts on different servers and switch without signing out.',
      status: 'done',
      category: 'Platform',
    },
    {
      id: 'webrtc-calls',
      title: 'Voice and video calls',
      description: 'WebRTC in direct calls and guild voice channels.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'screen-share',
      title: 'Screen sharing',
      description: 'Hardware H.264 encoding, so sharing does not cost you the frame rate.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'guilds',
      title: 'Guilds, roles and permissions',
      description: 'Categories, channels, roles with per-channel overrides, and an audit log.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'friend-system',
      title: 'Friends and private chats',
      description: 'Requests, relationships, and conversations away from any guild.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'message-reactions',
      title: 'Reactions and replies',
      description: 'React with emoji and reply to a specific message.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'custom-emoji',
      title: 'Custom guild emoji',
      description: 'Upload and manage a set per guild.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'wiki',
      title: 'Guild wiki',
      description: 'Pages that live with the guild, so knowledge is not buried in message history.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'forum-channels',
      title: 'Forum channels',
      description: 'Topic threads that stay put instead of scrolling away.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'events',
      title: 'Scheduled events',
      description: 'Put sessions on a calendar the whole guild can see.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'moderation',
      title: 'Moderation tools',
      description: 'Reports, bans, a moderation queue and an audit log.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'discord-import',
      title: 'Discord import',
      description: 'Bring an existing server across rather than starting from nothing.',
      status: 'done',
      category: 'Platform',
    },
    {
      id: 'bots',
      title: 'Bots in guilds',
      description: 'Install a bot into a guild and give it commands.',
      status: 'done',
      category: 'Platform',
    },
    {
      id: 'privacy-tools',
      title: 'Data export and opt-in telemetry',
      description: 'Ask for your data and get it. Telemetry stays off until you turn it on.',
      status: 'done',
      category: 'Security',
    },
    {
      id: 'presence',
      title: 'Rich presence',
      description: 'Show what you are playing, picked up from Steam and running games.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'theming',
      title: 'Theming and languages',
      description: 'Every colour and font size, exportable as JSON. English, German and French.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'link-previews',
      title: 'Link previews and embeds',
      description: 'Server-generated previews, with an inline player for media links.',
      status: 'done',
      category: 'Social',
    },

    // ── In flight ─────────────────────────────────────────────────────────
    {
      id: 'mobile-native',
      title: 'Native mobile app',
      description: 'A native client for phones, currently in internal testing.',
      status: 'in-progress',
      category: 'Mobile',
    },
    {
      id: 'webhooks',
      title: 'Guild webhooks',
      description: 'Authenticated and unauthenticated webhooks for posting into channels.',
      status: 'in-progress',
      category: 'Platform',
    },
    {
      id: 'sound-design',
      title: 'New sound design',
      description: 'Every alert, join and notification sound rebuilt by an audio designer who does this properly.',
      status: 'in-progress',
      category: 'Core',
    },
    {
      id: 'linux-polish',
      title: 'Linux polish',
      description: 'Builds ship for Debian, Ubuntu, Fedora and RHEL. Window handling and voice still need work.',
      status: 'in-progress',
      category: 'Platform',
    },

    // ── Planned ───────────────────────────────────────────────────────────
    {
      id: 'web-platform',
      title: 'Web client',
      description: 'Venta in a browser tab, with no install at all.',
      status: 'planned',
      category: 'Platform',
    },
    {
      id: 'public-api',
      title: 'Public API for integrations',
      description: 'A documented surface for building your own clients and automation.',
      status: 'planned',
      category: 'Platform',
    },

    // ── Considering ───────────────────────────────────────────────────────
    {
      id: 'voice-messages',
      title: 'Voice messages',
      description: 'Record a short clip instead of typing it out.',
      status: 'considering',
      category: 'Social',
    },
  ];

  getAll(): RoadmapItem[] {
    return this.items;
  }

  getByStatus(status: RoadmapStatus): RoadmapItem[] {
    return this.items.filter((item) => item.status === status);
  }

  add(item: RoadmapItem): void {
    this.items.push(item);
  }

  update(id: string, changes: Partial<Omit<RoadmapItem, 'id'>>): void {
    const index = this.items.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...changes };
    }
  }

  remove(id: string): void {
    this.items = this.items.filter((i) => i.id !== id);
  }
}
