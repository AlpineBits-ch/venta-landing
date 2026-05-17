import { Injectable } from '@angular/core';
import { RoadmapItem, RoadmapStatus } from './roadmap.model';

@Injectable({ providedIn: 'root' })
export class RoadmapService {
  private items: RoadmapItem[] = [
    {
      id: 'e2e-encryption',
      title: 'End-to-end encryption',
      description: 'All messages encrypted client-side. Keys never leave your device.',
      status: 'in-progress',
      category: 'Security',
    },
    {
      id: 'webrtc-calls',
      title: 'WebRTC voice & video calls',
      description: 'Low-latency peer-to-peer calls for up to 4 participants.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'guilds',
      title: 'Guilds with channels',
      description: 'Community spaces with text channels, categories, and a role permission system.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'friend-system',
      title: 'Friend system',
      description: 'Add friends, manage requests, and start private conversations.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'mobile-polish',
      title: 'Mobile app polish',
      description: 'Improved responsive layouts and touch interactions across the app.',
      status: 'in-progress',
      category: 'Mobile',
    },
    {
      id: 'screen-share',
      title: 'Screen sharing',
      description: 'Share your screen during voice and video calls.',
      status: 'done',
      category: 'Core',
    },
    {
      id: 'linux-support',
      title: 'Full Linux support',
      description: 'Stable builds for major distributions including Arch, Fedora, and Ubuntu.',
      status: 'planned',
      category: 'Platform',
    },
    {
      id: 'custom-emoji',
      title: 'Custom guild emoji',
      description: 'Upload and use custom emoji within your guilds.',
      status: 'considering',
      category: 'Social',
    },
    {
      id: 'message-reactions',
      title: 'Message reactions',
      description: 'React to messages with emoji.',
      status: 'done',
      category: 'Social',
    },
    {
      id: 'bots-api',
      title: 'Bot & API platform',
      description: 'A public API for building integrations and automation bots.',
      status: 'in-progress',
      category: 'Platform',
    },
    {
      id: 'webhooks',
      title: 'Webhook support for guilds',
      description: 'Authenticated and unauthenticated webhook support for guilds.',
      status: 'in-progress',
      category: 'Platform',
    },
    {
      id: 'self-hosting',
      title: 'Self-hosting',
      description: 'Run venta on your own infrastructure for maximum control and privacy.',
      status: 'planned',
      category: 'Platform',
    },
    {
      id: 'federation',
      title: 'Federation',
      description: 'Seamless integration with other self hosted server instances.',
      status: 'planned',
      category: 'Platform',
    },
  ];

  getAll(): RoadmapItem[] {
    return this.items;
  }

  getByStatus(status: RoadmapStatus): RoadmapItem[] {
    return this.items.filter(item => item.status === status);
  }

  add(item: RoadmapItem): void {
    this.items.push(item);
  }

  update(id: string, changes: Partial<Omit<RoadmapItem, 'id'>>): void {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...changes };
    }
  }

  remove(id: string): void {
    this.items = this.items.filter(i => i.id !== id);
  }
}
