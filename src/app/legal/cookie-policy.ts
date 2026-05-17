import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-policy',
  imports: [RouterLink],
  template: `
    <section class="pt-40 pb-20 px-4 min-h-screen">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg legal-prose">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Cookie Policy</h1>
          <p class="text-slate-500 text-sm mb-8">Last updated: May 17, 2025</p>

          <p>This Cookie Policy explains how AlpineBits KLG uses cookies and similar technologies on the Venta website (venta.gg). It should be read alongside our <a routerLink="/privacy">Privacy Policy</a>.</p>

          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#c1">What Are Cookies</a></li>
            <li><a href="#c2">Cookies We Use</a></li>
            <li><a href="#c3">Cookies We Do Not Use</a></li>
            <li><a href="#c4">The Venta Application</a></li>
            <li><a href="#c5">Managing Cookies</a></li>
            <li><a href="#c6">Changes to This Policy</a></li>
            <li><a href="#c7">Contact</a></li>
          </ol>

          <h2 id="c1">1. What Are Cookies</h2>
          <p>Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites function correctly, remember your preferences, and provide information to the site operators. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remaining on your device for a set period or until manually deleted).</p>

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
            <li><strong>Social media tracking pixels</strong>: No Meta, Google, or similar third-party tracking pixels are embedded on our site.</li>
            <li><strong>Analytics cookies</strong>: We do not use cookie-based analytics services (such as Google Analytics) that track you across sessions or sites. Any usage metrics we collect are aggregated and privacy-preserving at the server level.</li>
          </ol>
          <p>Our goal is to collect only what is strictly needed to run the service. Privacy is not a feature we added on top. It is the reason Venta exists.</p>

          <h2 id="c4">4. The Venta Application</h2>
          <p>The Venta desktop and mobile applications (Windows, Linux, macOS, iOS, Android) do not use browser cookies. They use secure, platform-appropriate storage mechanisms (such as encrypted local storage and secure OS keystores) for session tokens and preferences. These are not accessible to websites and are not covered by this Cookie Policy.</p>

          <h2 id="c5">5. Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. The following links provide instructions for common browsers:</p>
          <ol>
            <li><strong>Google Chrome</strong>: Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox</strong>: Settings → Privacy &amp; Security → Cookies and Site Data</li>
            <li><strong>Microsoft Edge</strong>: Settings → Cookies and site permissions → Cookies and site data</li>
            <li><strong>Safari</strong>: Preferences → Privacy → Manage Website Data</li>
          </ol>
          <p>Please note that disabling strictly necessary cookies (such as the authentication session cookie) will prevent you from using the Venta web client.</p>

          <h2 id="c6">6. Changes to This Policy</h2>
          <p>We may update this Cookie Policy as our technology or legal obligations change. Any updates will be reflected in the "last updated" date above. Material changes will be communicated via the Privacy Policy update notice.</p>

          <h2 id="c7">7. Contact</h2>
          <p>If you have questions about how we use cookies, please contact:</p>
          <address>
            AlpineBits KLG<br>
            c/o Dominic Järmann<br>
            Dörflistrasse 6b<br>
            5706 Boniswil<br>
            Switzerland<br>
            UID: CHE-332.403.467<br>
            <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a>
          </address>
        </div>
      </div>
    </section>
  `,
})
export class CookiePolicyComponent {}
