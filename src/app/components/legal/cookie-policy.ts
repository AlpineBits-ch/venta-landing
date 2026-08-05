import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-policy',
  imports: [RouterLink],
  template: `
    <section class="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div class="max-w-3xl mx-auto">
        <div class="rounded-2xl border border-line bg-card p-7 sm:p-10 prose-dark">
          <h1 class="display text-3xl text-text sm:text-4xl mb-4">Cookie Policy</h1>
          <p class="font-mono text-xs text-faint mb-8">Last updated: August 5, 2026</p>

          <p>This Cookie Policy explains how AlpineBits KLG uses cookies and similar technologies on the Venta website (venta.gg) and in the Venta web client. It should be read alongside our <a routerLink="/privacy">Privacy Policy</a>.</p>

          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#c1">What Are Cookies</a></li>
            <li><a href="#c2">Cookies We Use</a></li>
            <li><a href="#c3">Cookies We Do Not Use</a></li>
            <li><a href="#c4">Link Previews</a></li>
            <li><a href="#c5">Embedded Players From Other Services</a></li>
            <li><a href="#c6">The Venta Application</a></li>
            <li><a href="#c7">Managing Cookies</a></li>
            <li><a href="#c8">Changes to This Policy</a></li>
            <li><a href="#c9">Contact</a></li>
          </ol>

          <h2 id="c1">1. What Are Cookies</h2>
          <p>Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites function correctly, remember your preferences, and provide information to the site operators. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remaining on your device for a set period or until manually deleted).</p>
          <p>Websites can also use technologies that behave like cookies without technically being cookies, such as local storage, session storage and IndexedDB. Where this policy refers to cookies, it refers to these similar technologies as well.</p>

          <h2 id="c2">2. Cookies We Use</h2>
          <p>We use only strictly necessary cookies on venta.gg. These are required for the website to function and cannot be switched off. They do not store any personally identifiable information beyond what is technically necessary.</p>

          <p><strong>Authentication session cookie</strong>: When you log in to the Venta web client, a session cookie is set to keep you authenticated during your session. This cookie is deleted when you log out or close your browser session.</p>

          <p><strong>Security token (CSRF)</strong>: A short-lived token used to protect forms and API requests from cross-site request forgery attacks. This cookie contains no personal data and is rotated frequently.</p>

          <p><strong>Preference cookie</strong>: Stores lightweight UI preferences (such as theme selection) so you do not need to re-configure them on each visit. This cookie is persistent and expires after 12 months.</p>

          <p>These cookies fall under the "strictly necessary" and "functionality" categories. No consent banner is required for strictly necessary cookies under Swiss law; we display information about them here in the interest of transparency.</p>

          <h2 id="c3">3. Cookies We Do Not Use</h2>
          <p>We do not use:</p>
          <ol>
            <li><strong>Advertising or tracking cookies</strong>: We do not serve ads and do not allow third-party ad networks to place cookies on venta.gg.</li>
            <li><strong>Social media tracking pixels</strong>: No Meta, Google, or similar third-party tracking pixels are embedded on our site. Nothing loads from a third party unless you choose to start an embedded player, as described in section 5.</li>
            <li><strong>Analytics cookies</strong>: We do not use cookie-based analytics services (such as Google Analytics) that track you across sessions or sites. Any usage metrics we collect are aggregated and privacy-preserving at the server level.</li>
          </ol>
          <p>Our goal is to collect only what is strictly needed to run the service. Privacy is not a feature we added on top. It is the reason Venta exists.</p>

          <h2 id="c4">4. Link Previews</h2>
          <p>When a link is posted in a conversation, Venta may show a preview card with the linked page's title, description and image. Our servers fetch that page and image on our own infrastructure, and any preview image is copied to our own storage and served from our own domain.</p>
          <p>This means that viewing a preview card does not contact the linked website from your device, and the linked website does not receive your IP address, your browser details, or any indication that you saw the message. No cookies are set by the linked website. This happens once per link on our side, not once per person who reads the message.</p>
          <p>Previews are not generated for end-to-end encrypted conversations, because our servers cannot read those messages.</p>

          <h2 id="c5">5. Embedded Players From Other Services</h2>
          <p>Some links can be played inside Venta rather than opened in a new tab. This currently applies to a fixed list of services: <strong>YouTube</strong>, <strong>Spotify</strong>, <strong>Vimeo</strong> and <strong>Twitch</strong>.</p>
          <p>Until you press play, nothing is loaded from those services. The preview card shows only our own re-hosted thumbnail. <strong>When you press play, Venta loads a player supplied by that service directly into the page.</strong> From that moment the service can set its own cookies and similar storage on your device, and receives your IP address, your browser and device details, and information about what you played and for how long. If you are signed in to that service in the same browser, it may be able to associate that activity with your account there.</p>
          <p>These are third-party cookies. They are set by the service, not by us. We do not control them, we cannot read them, and we do not receive any data the service collects through them. Several of these services use cookies for advertising and profiling purposes on their own account.</p>
          <p>Because the player only loads after you deliberately press play, this is your choice each time, and no cookie banner sits between you and the rest of Venta. If you never press play, no third-party player cookie is ever set.</p>
          <p>Where a service offers a version of its player that stores less, we use it. YouTube videos are loaded from youtube-nocookie.com rather than youtube.com: it is the same player, but it does not set Google's advertising and personalisation cookies, and what you watch here is not added to your Google profile for ad targeting. Google may still set cookies necessary to play the video and to measure playback.</p>
          <p>For details on what each service stores, see its own policy:</p>
          <ol>
            <li><strong>YouTube</strong> (Google Ireland Limited): <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/cookies</a></li>
            <li><strong>Spotify</strong> (Spotify AB): <a href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noopener noreferrer">spotify.com/legal/cookies-policy</a></li>
            <li><strong>Vimeo</strong> (Vimeo.com, Inc.): <a href="https://vimeo.com/cookie_policy" target="_blank" rel="noopener noreferrer">vimeo.com/cookie_policy</a></li>
            <li><strong>Twitch</strong> (Twitch Interactive, Inc.): <a href="https://legal.twitch.com/legal/cookie-notice/" target="_blank" rel="noopener noreferrer">legal.twitch.com/legal/cookie-notice</a></li>
          </ol>
          <p>We may add or remove supported services over time. Any change to this list will be reflected in this policy.</p>

          <h2 id="c6">6. The Venta Application</h2>
          <p>The Venta desktop and mobile applications (Windows, Linux, macOS, iOS, Android) do not use browser cookies for your Venta session. They use secure, platform-appropriate storage mechanisms (such as encrypted local storage and secure OS keystores) for session tokens and preferences. These are not accessible to websites and are not covered by this Cookie Policy.</p>
          <p>The embedded players described in section 5 are an exception. When you press play in the desktop or mobile app, the player runs in an embedded browser view, and the service can set cookies and similar storage there in the same way it would in a browser. That storage belongs to the service, is kept separately from your Venta session, and is cleared when you clear the application's data.</p>

          <h2 id="c7">7. Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. The following links provide instructions for common browsers:</p>
          <ol>
            <li><strong>Google Chrome</strong>: Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox</strong>: Settings → Privacy &amp; Security → Cookies and Site Data</li>
            <li><strong>Microsoft Edge</strong>: Settings → Cookies and site permissions → Cookies and site data</li>
            <li><strong>Safari</strong>: Preferences → Privacy → Manage Website Data</li>
          </ol>
          <p>The same settings control third-party cookies from embedded players. Blocking third-party cookies, or using your browser's private browsing mode, will prevent the services in section 5 from storing anything persistent on your device; some of those players may then refuse to play, or may lose track of your position in a track or video. Simply not pressing play has the same effect and costs nothing.</p>
          <p>Please note that disabling strictly necessary cookies (such as the authentication session cookie) will prevent you from using the Venta web client.</p>

          <h2 id="c8">8. Changes to This Policy</h2>
          <p>We may update this Cookie Policy as our technology or legal obligations change. Any updates will be reflected in the "last updated" date above. Material changes will be communicated via the Privacy Policy update notice.</p>

          <h2 id="c9">9. Contact</h2>
          <p>If you have questions about how we use cookies, please contact:</p>
          <address>
            AlpineBits KLG<br>
            c/o Dominic Järmann<br>
            Dörflistrasse 6b<br>
            5706 Boniswil<br>
            Switzerland<br>
            UID: CHE-332.403.467<br>
            <a href="mailto:hello@alpinebits.ch">hello&#64;alpinebits.ch</a>
          </address>
        </div>
      </div>
    </section>
  `,
})
export class CookiePolicyComponent {}
