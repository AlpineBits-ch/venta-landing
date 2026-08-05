import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../ui/icon';
import { MockGuildComponent, MockVoiceComponent, MockWikiComponent } from '../ui/product-mock';
import {
  DISCORD_INVITE,
  DOCS_URL,
  DOWNLOADS,
  DownloadTarget,
  GITHUB_URL,
  STATUS_URL,
  SUPPORT_URL,
} from '../../site-links';

interface Feature {
  icon: string;
  name: string;
  detail: string;
}

interface FeatureGroup {
  label: string;
  items: Feature[];
}

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, MockGuildComponent, MockWikiComponent, MockVoiceComponent],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly discord = DISCORD_INVITE;
  protected readonly github = GITHUB_URL;
  protected readonly docs = DOCS_URL;
  protected readonly support = SUPPORT_URL;
  protected readonly status = STATUS_URL;
  protected readonly downloads = DOWNLOADS;

  // ── Download control ────────────────────────────────────────────────────

  protected readonly menuOpen = signal(false);
  protected readonly detectedOs = signal<'windows' | 'linux'>('windows');

  /** The button offers what the visitor is on; everything else lives in the menu. */
  protected readonly primary = computed<DownloadTarget>(
    () => this.downloads.find((d) => d.os === this.detectedOs()) ?? this.downloads[0],
  );

  protected toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen.update((open) => !open);
  }

  @HostListener('document:click')
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.menuOpen.set(false);
  }

  // ── Hero identity field ─────────────────────────────────────────────────
  //
  // The one animated thing on the page. It retypes the domain half of a Venta
  // login, because that half is the whole product argument: the client is the
  // same whether the part after the @ is ours or yours. The cloud/server icon
  // swap is the one the client's own login screen does.

  private readonly domains = ['venta.gg', 'yourserver.tld', 'guild.example'];

  protected readonly domainIndex = signal(0);
  protected readonly typedDomain = signal(this.domains[0]);
  protected readonly animating = signal(true);

  /** Anything that is not our own host gets the server icon, as in the client. */
  protected readonly isCustomHost = computed(() => this.domainIndex() > 0);

  ngOnInit(): void {
    this.detectOs();

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      // Reduced motion still has to make the point, so it rests on a custom
      // host rather than on ours.
      this.animating.set(false);
      this.domainIndex.set(1);
      this.typedDomain.set(this.domains[1]);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let phase: 'typing' | 'holding' | 'deleting' = 'holding';

    const tick = (): void => {
      const target = this.domains[this.domainIndex()];
      const shown = this.typedDomain();
      let next: number;

      switch (phase) {
        case 'holding':
          phase = 'deleting';
          next = 2200;
          break;
        case 'deleting':
          if (shown.length === 0) {
            this.domainIndex.update((i) => (i + 1) % this.domains.length);
            phase = 'typing';
            next = 180;
          } else {
            this.typedDomain.set(shown.slice(0, -1));
            next = 32;
          }
          break;
        case 'typing':
          if (shown.length === target.length) {
            phase = 'holding';
            next = 0;
          } else {
            this.typedDomain.set(target.slice(0, shown.length + 1));
            next = 58;
          }
          break;
      }

      timer = setTimeout(tick, next);
    };

    timer = setTimeout(tick, 1600);
    this.destroyRef.onDestroy(() => clearTimeout(timer));
  }

  /** Only ever picks between the platforms that actually have a build. */
  private detectOs(): void {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('linux') && !ua.includes('android')) {
      this.detectedOs.set('linux');
    }
  }

  // ── Content ─────────────────────────────────────────────────────────────

  protected readonly groups: FeatureGroup[] = [
    {
      label: 'Messaging',
      items: [
        {
          icon: 'message',
          name: 'A composer that keeps up',
          detail:
            'Markdown, syntax-highlighted code, tables and task lists. Reactions and replies where you expect them.',
        },
        {
          icon: 'forum',
          name: 'Forum channels',
          detail: 'Topics that stay put instead of scrolling out of reach after one busy evening.',
        },
        {
          icon: 'book',
          name: 'Guild wiki',
          detail: 'Somewhere to put what your community knows, so it is not buried 5,000 messages back.',
        },
        {
          icon: 'calendar',
          name: 'Scheduled events',
          detail: 'Put a session on the calendar and let people see what is coming.',
        },
        {
          icon: 'palette',
          name: 'Custom emoji',
          detail: 'Upload your own set per guild.',
        },
        {
          icon: 'download',
          name: 'Discord import',
          detail: 'Bring an existing server across instead of starting in an empty room.',
        },
      ],
    },
    {
      label: 'Voice and video',
      items: [
        {
          icon: 'mic',
          name: 'Voice channels',
          detail: 'Drop in and out. Mute and deafen follow you between channels.',
        },
        {
          icon: 'video',
          name: 'Calls with camera',
          detail: 'Direct calls and guild voice channels, both over WebRTC.',
        },
        {
          icon: 'screenShare',
          name: 'Screen sharing',
          detail: 'Encoded in hardware H.264, so sharing a screen does not cost you the frame rate.',
        },
        {
          icon: 'gauge',
          name: 'Push to talk',
          detail: 'Global hotkeys, plus input and output device pickers that remember what you chose.',
        },
        {
          icon: 'users',
          name: 'Rich presence',
          detail: 'Show what you are playing, picked up from Steam and running games.',
        },
      ],
    },
    {
      label: 'Communities',
      items: [
        {
          icon: 'users',
          name: 'Guilds and channels',
          detail: 'Categories, text, voice and forum channels, arranged the way your community works.',
        },
        {
          icon: 'shield',
          name: 'Permissions with an audit trail',
          detail: 'Roles with per-channel overrides, and a log of who changed what.',
        },
        {
          icon: 'lifebuoy',
          name: 'Moderation tools',
          detail: 'Reports, bans, and a queue to work through them.',
        },
        {
          icon: 'key',
          name: 'Guest access',
          detail: 'Open a guild to people who do not have an account on your instance.',
        },
        {
          icon: 'bot',
          name: 'Bots',
          detail: 'Install a bot into a guild and give it commands.',
        },
        {
          icon: 'cloud',
          name: 'Quiet hours',
          detail: 'Set the hours when a guild stops pinging people.',
        },
      ],
    },
    {
      label: 'Privacy and control',
      items: [
        {
          icon: 'lock',
          name: 'End-to-end encryption',
          detail:
            'Private conversations and calls are encrypted with MLS. Guild channels can have it switched on per channel.',
        },
        {
          icon: 'key',
          name: 'Devices and key backup',
          detail: 'Add a device without losing your history, and keep a backup of your key material.',
        },
        {
          icon: 'shield',
          name: 'Two-factor authentication',
          detail: 'On your account, and sign-in from another device by QR code.',
        },
        {
          icon: 'download',
          name: 'Export everything',
          detail: 'Ask for your data and get it. Leaving is not meant to be a trap.',
        },
        {
          icon: 'gauge',
          name: 'Telemetry is opt-in',
          detail: 'Off until you turn it on. No ad networks, no data sale.',
        },
        {
          icon: 'palette',
          name: 'Themes and languages',
          detail: 'Every colour and font size is yours to set and export. English, German and French.',
        },
      ],
    },
  ];

  protected readonly faq = [
    {
      q: 'What does it cost?',
      a: 'Nothing to use. No ads, no tracking, and nothing about you is for sale. Development is funded by us and by people who choose to chip in.',
    },
    {
      q: 'How is this different from Discord?',
      a: 'You can run the server. Your identity carries its host, so you sign in as you@your-server; instances federate with one another; and private conversations are end-to-end encrypted. If you would rather not run anything, use ours and none of that changes.',
    },
    {
      q: 'Can I move my community over?',
      a: 'There is a Discord import that brings a server across, and guild templates if you would rather start clean.',
    },
    {
      q: 'Is there a mobile app?',
      a: 'A native mobile app is in internal testing now. Today the client runs on Windows and Linux.',
    },
    {
      q: 'How finished is it?',
      a: 'It is a beta and it behaves like one - things break, and we ship fixes often. Service status is public, and bugs reported on Discord get read.',
    },
  ];
}
