import { Component, inject } from '@angular/core';
import { RoadmapService } from './roadmap.service';
import { RoadmapItem, RoadmapStatus } from './roadmap.model';

interface StatusColumn {
  status: RoadmapStatus;
  label: string;
  dotColor: string;
  badge: string;
  statusText: string;
}

@Component({
  selector: 'app-roadmap',
  imports: [],
  templateUrl: './roadmap.html',
})
export class RoadmapComponent {
  private roadmapService = inject(RoadmapService);

  readonly columns: StatusColumn[] = [
    {
      status: 'done',
      label: 'Shipped',
      dotColor: '#10b981',
      badge: 'bg-emerald-100 text-emerald-700',
      statusText: 'text-emerald-600',
    },
    {
      status: 'in-progress',
      label: 'In Progress',
      dotColor: '#3b82f6',
      badge: 'bg-blue-100 text-blue-700',
      statusText: 'text-blue-600',
    },
    {
      status: 'planned',
      label: 'Planned',
      dotColor: '#6366f1',
      badge: 'bg-indigo-100 text-indigo-700',
      statusText: 'text-indigo-600',
    },
    {
      status: 'considering',
      label: 'Considering',
      dotColor: '#94a3b8',
      badge: 'bg-slate-100 text-slate-600',
      statusText: 'text-slate-500',
    },
  ];

  itemsFor(status: RoadmapStatus): RoadmapItem[] {
    return this.roadmapService.getByStatus(status);
  }
}
