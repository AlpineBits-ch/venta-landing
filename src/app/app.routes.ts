import { Routes } from '@angular/router';
import {BlogListComponent} from './components/blog/blog-list/blog-list';
import {BlogPostComponent} from './components/blog/blog-post/blog-post';
import {Home} from './components/home/home';
import {RoadmapComponent} from './components/roadmap/roadmap';
import {PrivacyComponent} from './components/legal/privacy';
import {EulaComponent} from './components/legal/eula';
import {CookiePolicyComponent} from './components/legal/cookie-policy';
import {ImpressumComponent} from './components/legal/impressum';
import {InviteComponent} from './components/invite/invite.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: Home},
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'eula', component: EulaComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'invite/:id', component: InviteComponent }
];
