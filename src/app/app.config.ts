import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        // Section links are routerLink + fragment rather than plain href="#x":
        // `<base href="/">` resolves a bare fragment against the base, so
        // href="#download" means "/#download", which the router reads as the
        // root route and redirects to /home - the page appears to reload and
        // jumps to the top. Routing the fragment properly needs this on, or the
        // URL changes and nothing scrolls.
        anchorScrolling: 'enabled'
      }))
  ]
};
