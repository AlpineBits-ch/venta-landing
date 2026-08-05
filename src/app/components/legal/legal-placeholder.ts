import { Component, input } from '@angular/core';

@Component({
  selector: 'app-legal-placeholder',
  imports: [],
  template: `
    <section class="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div class="max-w-3xl mx-auto">
        <div class="rounded-2xl border border-line bg-card p-7 sm:p-10 prose-dark">
          <h1 class="display text-3xl text-text sm:text-4xl mb-4">{{ title() }}</h1>
          <p class="font-mono text-xs text-faint mb-8">Last updated: TBD</p>
          <div class="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
            <p class="text-slate-400 text-sm font-medium">This page is a placeholder.</p>
            <p class="text-slate-400 text-sm mt-1">The full {{ title() }} will be published before the official release.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LegalPlaceholderComponent {
  title = input.required<string>();
}
