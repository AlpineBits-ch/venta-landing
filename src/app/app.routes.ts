import { Routes } from '@angular/router';
import {BlogListComponent} from './blog/blog-list/blog-list';
import {BlogPostComponent} from './blog/blog-post/blog-post';
import {Home} from './home/home';
import {RoadmapComponent} from './roadmap/roadmap';
import {PrivacyComponent} from './legal/privacy';
import {EulaComponent} from './legal/eula';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: Home},
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'eula', component: EulaComponent },
];
