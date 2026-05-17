import { Component, input } from '@angular/core';

@Component({
  selector: 'app-legal-placeholder',
  imports: [],
  template: `
    <section class="pt-40 pb-20 px-4 min-h-screen">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{{ title() }}</h1>
          <p class="text-slate-500 text-sm mb-8">Last updated: TBD</p>
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
