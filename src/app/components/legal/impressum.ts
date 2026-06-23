import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum',
  imports: [RouterLink],
  template: `
    <section class="pt-40 pb-20 px-4 min-h-screen">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg legal-prose">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Imprint</h1>

          <h2>Company</h2>
          <address>
            AlpineBits KLG<br>
            c/o Dominic Järmann<br>
            Dörflistrasse 6b<br>
            5706 Boniswil<br>
            Switzerland<br>
            UID: CHE-332.403.467
          </address>

          <h2>Legal Form</h2>
          <p>AlpineBits KLG is a Kollektivgesellschaft (KLG) registered under Swiss law.</p>

          <h2>Contact</h2>
          <p>
            Website: <a href="https://venta.gg">venta.gg</a><br>
            Email: <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a>
          </p>

          <h2>Responsible for Content</h2>
          <p>AlpineBits KLG, at the address listed above, is responsible for all content published on venta.gg and in the Venta application.</p>

          <h2>Commercial Register</h2>
          <p>AlpineBits KLG is registered in the commercial register of the Canton of Aargau, Switzerland, under UID CHE-332.403.467.</p>

          <h2>Platform</h2>
          <p>Venta is a secure messaging and communication platform developed and operated by AlpineBits KLG. The platform is available on Windows, Linux, macOS, iOS, Android, and via supported web browsers at <a href="https://venta.gg">venta.gg</a>.</p>

          <h2>Dispute Resolution</h2>
          <p>The European Commission provides an online dispute resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>. AlpineBits KLG is not obligated to participate in dispute resolution proceedings before a consumer arbitration body, but is willing to seek an amicable resolution directly.</p>

          <h2>Applicable Law</h2>
          <p>This website and its content are subject to Swiss law. The place of jurisdiction is Boniswil, Canton of Aargau, Switzerland.</p>

          <h2>Disclaimer</h2>
          <p>Despite careful review, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.</p>
          <p>All content on venta.gg is protected by copyright. Reproduction, distribution, or any form of commercialization of such material beyond the scope of copyright law requires the prior written consent of AlpineBits KLG.</p>

          <h2>Related Documents</h2>
          <p>
            <a routerLink="/privacy">Privacy Policy</a> &middot;
            <a routerLink="/eula">End User License Agreement</a> &middot;
            <a routerLink="/cookie-policy">Cookie Policy</a>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ImpressumComponent {}
