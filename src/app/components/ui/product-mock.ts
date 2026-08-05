import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from './icon';

/**
 * The product, drawn in DOM rather than photographed.
 *
 * Every company in this category composes its product shots - Discord's
 * homepage contains no real screenshots at all - and building them as markup
 * instead of images buys a few things a screenshot cannot: it stays sharp at
 * any pixel density, it reflows on a phone instead of shrinking into
 * illegibility, it costs a few hundred bytes rather than a JPEG each, and no
 * real account data can end up in it by construction.
 *
 * The layout, spacing and colour here are copied from the running client, and
 * the tokens are the client's own (see styles.css). Everything depicted is
 * something the app actually does; only the people and the words are invented.
 */

interface MockMessage {
  who: string;
  initial: string;
  tint: string;
  time: string;
  body: string;
}

const CAST: MockMessage[] = [
  {
    who: 'Ash Ferrier',
    initial: 'A',
    tint: 'bg-brand',
    time: '20:12',
    body: 'raid comp is on the wiki now - both builds we settled on are in there',
  },
  {
    who: 'Rowan',
    initial: 'R',
    tint: 'bg-emerald-700',
    time: '20:12',
    body: 'good. i am not scrolling back four hundred messages for that again',
  },
  {
    who: 'Mika',
    initial: 'M',
    tint: 'bg-orange-800',
    time: '20:13',
    body: 'moved vod review to friday, it is on the calendar',
  },
  {
    who: 'Toma',
    initial: 'T',
    tint: 'bg-violet-800',
    time: '20:16',
    body: 'give me five, migrating my instance to the new box first',
  },
];

@Component({
  selector: 'app-mock-guild',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <div class="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/60"
         role="img"
         aria-label="The Venta client: a guild with categories and channels on the left and a conversation in the main column.">
      <div class="flex h-[26rem] sm:h-[28rem]">

        <!-- Guild rail. The mark is a file so it swaps with the brand. -->
        <div class="hidden w-[3.25rem] shrink-0 flex-col items-center gap-2 border-r border-line-soft bg-ink py-3 sm:flex">
          <img src="logo-mark.svg" alt="" width="26" height="26" class="h-[26px] w-[26px]">
          <div class="my-1 h-px w-6 bg-line"></div>
          @for (g of guilds; track g.id) {
            <span class="relative flex h-8 w-8 items-center justify-center rounded-[10px] text-[11px] font-bold text-white"
                  [class]="g.tint">
              @if (g.active) {
                <span class="absolute -left-3 h-5 w-[3px] rounded-r bg-text"></span>
              }
              {{ g.id }}
            </span>
          }
        </div>

        <!-- Channel list -->
        <div class="hidden w-[10.5rem] shrink-0 flex-col border-r border-line-soft bg-sidebar md:flex">
          <div class="flex h-9 items-center justify-between border-b border-line-soft px-3">
            <span class="truncate text-[12px] font-bold text-text">Ridgeline</span>
            <app-icon name="chevronDown" class="h-3 w-3 text-faint" />
          </div>

          <div class="flex items-center gap-2 px-3 py-2">
            <app-icon name="book" class="h-3.5 w-3.5 text-muted" />
            <span class="text-[12px] font-semibold text-muted">Wiki</span>
          </div>

          <div class="flex flex-col gap-px overflow-hidden px-1.5">
            @for (group of channels; track group.label) {
              <p class="mt-2 px-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                {{ group.label }}
              </p>
              @for (c of group.items; track c.name) {
                <span class="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[12px]"
                      [class]="c.active ? 'bg-raised text-text' : 'text-muted'">
                  <app-icon [name]="c.voice ? 'mic' : 'message'" class="h-3 w-3 opacity-60" />
                  <span class="truncate">{{ c.name }}</span>
                </span>
              }
            }
          </div>
        </div>

        <!-- Conversation -->
        <div class="flex min-w-0 flex-1 flex-col">
          <div class="flex h-9 shrink-0 items-center gap-2 border-b border-line-soft px-4">
            <app-icon name="message" class="h-3.5 w-3.5 text-faint" />
            <span class="text-[12px] font-semibold text-text">general-chat</span>
          </div>

          <div class="flex flex-1 flex-col justify-end gap-3.5 overflow-hidden px-4 py-4">
            @for (m of cast; track m.who) {
              <div class="flex gap-2.5">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                      [class]="m.tint">
                  {{ m.initial }}
                </span>
                <div class="min-w-0">
                  <p class="flex items-baseline gap-2">
                    <span class="text-[12.5px] font-semibold text-text">{{ m.who }}</span>
                    <span class="font-mono text-[10px] text-faint">{{ m.time }}</span>
                  </p>
                  <p class="mt-0.5 text-[12.5px] leading-snug text-muted">{{ m.body }}</p>
                </div>
              </div>
            }
          </div>

          <div class="shrink-0 px-4 pb-4">
            <div class="flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2">
              <span class="text-[12.5px] text-faint">Message #general-chat</span>
              <span class="ml-auto h-3.5 w-px bg-line"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
})
export class MockGuildComponent {
  protected readonly cast = CAST;

  protected readonly guilds = [
    { id: 'R', tint: 'bg-brand-dark', active: true },
    { id: 'K', tint: 'bg-emerald-800', active: false },
    { id: 'N', tint: 'bg-orange-900', active: false },
  ];

  protected readonly channels = [
    {
      label: 'Getting started',
      items: [
        { name: 'rules', active: false, voice: false },
        { name: 'welcome', active: false, voice: false },
      ],
    },
    {
      label: 'Community',
      items: [
        { name: 'general-chat', active: true, voice: false },
        { name: 'raid-planning', active: false, voice: false },
        { name: 'clips', active: false, voice: false },
      ],
    },
    {
      label: 'Voice',
      items: [
        { name: 'Squad one', active: false, voice: true },
        { name: 'AFK', active: false, voice: true },
      ],
    },
  ];
}

@Component({
  selector: 'app-mock-wiki',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <figure class="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div class="flex flex-1 flex-col gap-3 p-6">
        <div class="flex items-center gap-2">
          <app-icon name="book" class="h-4 w-4 text-brand-dim" />
          <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Wiki</span>
        </div>

        <h3 class="text-[15px] font-semibold text-text">Tuesday raid - comp and rotations</h3>

        <div class="flex flex-col gap-1.5">
          @for (line of lines; track line.w) {
            <span class="h-1.5 rounded-full bg-line" [style.width.%]="line.w"></span>
          }
        </div>

        <div class="mt-1 rounded-lg border border-line bg-card p-3">
          <p class="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Builds</p>
          <div class="mt-2 flex flex-col gap-1.5">
            <span class="h-1.5 w-3/4 rounded-full bg-line"></span>
            <span class="h-1.5 w-1/2 rounded-full bg-line"></span>
          </div>
        </div>

        <p class="mt-auto flex items-center gap-2 pt-2 text-[11px] text-faint">
          <span class="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[8px] font-bold text-white">A</span>
          Edited by Ash Ferrier
        </p>
      </div>
      <figcaption class="border-t border-line-soft px-5 py-3 text-sm text-muted">
        A wiki that lives with the guild
      </figcaption>
    </figure>
  `,
})
export class MockWikiComponent {
  /** Prose stand-ins - a wiki page reads as shape at this size, not as words. */
  protected readonly lines = [{ w: 100 }, { w: 92 }, { w: 96 }, { w: 60 }];
}

@Component({
  selector: 'app-mock-voice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <figure class="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div class="flex flex-1 flex-col gap-4 p-6">
        <div class="flex items-center gap-2">
          <app-icon name="mic" class="h-4 w-4 text-online" />
          <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Voice &middot; Squad one</span>
          <span class="ml-auto font-mono text-[10px] text-online">Connected</span>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          @for (p of people; track p.name) {
            <div class="flex items-center gap-2.5 rounded-lg border p-2.5"
                 [class]="p.speaking ? 'border-online/40 bg-online/5' : 'border-line bg-card'">
              <span class="relative flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                    [class]="p.tint">
                {{ p.initial }}
                @if (p.speaking) {
                  <span class="speaking-ring absolute inset-0 rounded-full ring-2 ring-online"></span>
                }
              </span>
              <span class="min-w-0 flex-1 truncate text-[12.5px] text-text">{{ p.name }}</span>
              @if (p.muted) {
                <app-icon name="micOff" class="h-3.5 w-3.5 text-offline" />
              } @else if (p.sharing) {
                <app-icon name="screenShare" class="h-3.5 w-3.5 text-brand-dim" />
              }
            </div>
          }
        </div>

        <div class="mt-auto flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2">
          <app-icon name="screenShare" class="h-3.5 w-3.5 text-brand-dim" />
          <span class="text-[12px] text-muted">Rowan is sharing a screen</span>
        </div>
      </div>
      <figcaption class="border-t border-line-soft px-5 py-3 text-sm text-muted">
        Voice channels with screen sharing
      </figcaption>
    </figure>
  `,
  styles: [
    `
      /* The ring says who is talking, so it carries information rather than
         decoration - which is why it is the one thing here that moves. */
      @keyframes speak {
        0%,
        100% {
          opacity: 0.45;
        }
        50% {
          opacity: 1;
        }
      }
      .speaking-ring {
        animation: speak 1.6s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .speaking-ring {
          animation: none;
          opacity: 1;
        }
      }
    `,
  ],
})
export class MockVoiceComponent {
  protected readonly people = [
    { name: 'Ash Ferrier', initial: 'A', tint: 'bg-brand', speaking: true, muted: false, sharing: false },
    { name: 'Rowan', initial: 'R', tint: 'bg-emerald-700', speaking: false, muted: false, sharing: true },
    { name: 'Mika', initial: 'M', tint: 'bg-orange-800', speaking: false, muted: true, sharing: false },
    { name: 'Toma', initial: 'T', tint: 'bg-violet-800', speaking: false, muted: false, sharing: false },
  ];
}
