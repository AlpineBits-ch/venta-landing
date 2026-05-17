export type RoadmapStatus = 'done' | 'in-progress' | 'planned' | 'considering';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  category: string;
}
