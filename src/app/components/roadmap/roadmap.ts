import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoadmapService } from './roadmap.service';
import { RoadmapItem, RoadmapStatus } from './roadmap.model';
import { IconComponent } from '../ui/icon';
import { DISCORD_INVITE } from '../../site-links';

interface StatusColumn {
  status: RoadmapStatus;
  label: string;
  blurb: string;
  /** Token colour class for the marker and the count. */
  tone: string;
}

@Component({
  selector: 'app-roadmap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  templateUrl: './roadmap.html',
})
export class RoadmapComponent {
  private readonly roadmap = inject(RoadmapService);

  protected readonly discord = DISCORD_INVITE;

  /**
   * Only unfinished work is columned. Shipped items outnumber the rest several
   * times over, and a column that long stops being a column.
   */
  protected readonly columns: StatusColumn[] = [
    {
      status: 'in-progress',
      label: 'In flight',
      blurb: 'Being built now.',
      tone: 'text-connecting',
    },
    {
      status: 'planned',
      label: 'Planned',
      blurb: 'Committed, not started.',
      tone: 'text-brand-dim',
    },
    {
      status: 'considering',
      label: 'Considering',
      blurb: 'Tell us if it matters.',
      tone: 'text-faint',
    },
  ];

  protected readonly shipped: RoadmapItem[] = this.roadmap.getByStatus('done');

  protected itemsFor(status: RoadmapStatus): RoadmapItem[] {
    return this.roadmap.getByStatus(status);
  }
}
