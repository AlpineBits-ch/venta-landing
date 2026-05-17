import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  template: `
    <section class="pt-40 pb-20 px-4 min-h-screen">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg legal-prose">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p class="text-slate-500 text-sm mb-8">Last updated: May 17, 2025</p>

          <p>AlpineBits KLG ("we", "us", or "our") operates Venta (venta.gg), a secure messaging and communication platform. Privacy is not an afterthought for us. It is the reason Venta exists. This policy explains what data we collect, why we collect it, and how we protect it.</p>

          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#p1">Who We Are</a></li>
            <li><a href="#p2">Data We Collect</a></li>
            <li><a href="#p3">How We Use Your Data</a></li>
            <li><a href="#p4">End-to-End Encryption</a></li>
            <li><a href="#p5">Data Sharing</a></li>
            <li><a href="#p6">Data Retention</a></li>
            <li><a href="#p7">Your Rights</a></li>
            <li><a href="#p8">Security</a></li>
            <li><a href="#p9">Children</a></li>
            <li><a href="#p10">Cookies</a></li>
            <li><a href="#p11">Changes to This Policy</a></li>
            <li><a href="#p12">Contact</a></li>
          </ol>

          <h2 id="p1">1. Who We Are</h2>
          <p>The data controller responsible for your personal data is:</p>
          <address>
            AlpineBits KLG<br>
            Dörflistrasse 6b<br>
            5706 Boniswil<br>
            Switzerland<br>
            <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a>
          </address>
          <p>This policy is governed by Swiss law, including the Federal Act on Data Protection (nFADP), and is designed to also meet the requirements of the EU General Data Protection Regulation (GDPR) where applicable.</p>

          <h2 id="p2">2. Data We Collect</h2>

          <p><strong>Account data</strong>: When you register, we collect your username, email address, and a hashed representation of your password. We never store passwords in plaintext. A profile picture is optional.</p>

          <p><strong>Message metadata</strong>: Due to end-to-end encryption, we cannot read the content of your private messages or calls. We do store metadata necessary to route and deliver messages: sender and recipient identifiers, timestamps, and delivery status. We do not store message content on our servers beyond the encrypted payload required for delivery.</p>

          <p><strong>Call data</strong>: WebRTC calls are established peer-to-peer where possible. We retain call metadata (participants, start time, duration) but do not record or store call audio or video.</p>

          <p><strong>Guild and community data</strong>: Content posted in guilds (channels, messages, reactions) is stored on our servers to enable community features. Guild messages are not end-to-end encrypted between all members by default; they are encrypted in transit and at rest on our infrastructure.</p>

          <p><strong>Technical and device data</strong>: We collect information about your device and operating system version, app version, IP address, and connection data. This is used to maintain compatibility, diagnose issues, and ensure platform stability.</p>

          <p><strong>Crash and error reports</strong>: If the application crashes or encounters an error, we may collect a crash report containing technical diagnostics. These reports do not include message content.</p>

          <p><strong>Download data</strong>: When you download Venta from venta.gg, our infrastructure logs the request including IP address and timestamp for security and abuse prevention.</p>

          <h2 id="p3">3. How We Use Your Data</h2>
          <p>We use the data described above exclusively to:</p>
          <ol>
            <li>Provide, operate, and improve the Venta platform;</li>
            <li>Authenticate users and protect accounts from unauthorized access;</li>
            <li>Route and deliver messages and calls to their intended recipients;</li>
            <li>Diagnose technical issues and maintain platform stability;</li>
            <li>Enforce our Terms of Service and End User License Agreement;</li>
            <li>Respond to legal obligations or lawful requests from Swiss authorities.</li>
          </ol>
          <p>We do not sell your data. We do not use your data for advertising. We do not build behavioral profiles for commercial purposes.</p>

          <h2 id="p4">4. End-to-End Encryption</h2>
          <p>Private messages and direct calls between users are protected by end-to-end encryption using the MLS (Message Layer Security) protocol. This means that the content of your private communications is encrypted on your device before it reaches our servers, and can only be decrypted by the intended recipient. AlpineBits KLG does not have the technical ability to read the content of end-to-end encrypted messages or calls.</p>
          <p>Guild channel messages are encrypted in transit and at rest on our servers, but are not end-to-end encrypted across all members by default. We are working toward expanding E2EE coverage in future releases.</p>

          <h2 id="p5">5. Data Sharing</h2>
          <p>We do not sell or rent your personal data to third parties.</p>
          <p>We may share limited data with the following categories of recipients only as necessary to operate the service:</p>
          <ol>
            <li><strong>Infrastructure providers</strong>: Hosting and CDN services that store and transmit data on our behalf, bound by data processing agreements.</li>
            <li><strong>Legal authorities</strong>: If required by Swiss law, a valid court order, or to protect the safety of users or the public, we may disclose account-level data (not message content, which we cannot access for E2EE messages) to competent authorities.</li>
          </ol>
          <p>Any third-party processors we engage are contractually required to handle your data only as directed by us and in accordance with applicable data protection law.</p>

          <h2 id="p6">6. Data Retention</h2>
          <p>We retain your account data for as long as your account is active. If you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or compliance purposes.</p>
          <p>Message metadata and technical logs are retained for a maximum of 90 days for security and abuse prevention purposes, after which they are deleted.</p>
          <p>Encrypted message payloads are deleted from our servers once delivery is confirmed.</p>

          <h2 id="p7">7. Your Rights</h2>
          <p>Under the Swiss nFADP and, where applicable, the GDPR, you have the following rights regarding your personal data:</p>
          <ol>
            <li><strong>Right of access</strong>: You may request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong>: You may request correction of inaccurate data.</li>
            <li><strong>Right to erasure</strong>: You may request deletion of your account and associated personal data.</li>
            <li><strong>Right to restriction</strong>: You may request that we restrict processing of your data in certain circumstances.</li>
            <li><strong>Right to data portability</strong>: You may request your data in a structured, machine-readable format.</li>
            <li><strong>Right to object</strong>: You may object to processing based on legitimate interests.</li>
          </ol>
          <p>To exercise any of these rights, contact us at <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC).</p>

          <h2 id="p8">8. Security</h2>
          <p>We implement technical and organizational measures to protect your personal data, including end-to-end encryption for private communications, encrypted storage at rest, TLS for all data in transit, and strict access controls on our infrastructure. Despite these measures, no system is completely secure, and we cannot guarantee absolute security.</p>

          <h2 id="p9">9. Children</h2>
          <p>Venta is not directed at children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has provided us with personal data, please contact us at <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a> and we will delete it promptly.</p>

          <h2 id="p10">10. Cookies</h2>
          <p>We use a limited number of cookies on venta.gg. Please see our <a routerLink="/cookie-policy">Cookie Policy</a> for full details.</p>

          <h2 id="p11">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify registered users of material changes by email or via an in-app notice. The "last updated" date at the top of this page reflects the most recent revision. Continued use of Venta after changes take effect constitutes acceptance of the revised policy.</p>

          <h2 id="p12">12. Contact</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
          <address>
            AlpineBits KLG<br>
            Dörflistrasse 6b<br>
            5706 Boniswil<br>
            Switzerland<br>
            <a href="mailto:legal@venta.gg">legal&#64;venta.gg</a>
          </address>
        </div>
      </div>
    </section>
  `,
})
export class PrivacyComponent {}
