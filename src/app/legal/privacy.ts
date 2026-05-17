import { Component } from '@angular/core';
import { LegalPlaceholderComponent } from './legal-placeholder';

@Component({
  selector: 'app-privacy',
  imports: [LegalPlaceholderComponent],
  template: `<app-legal-placeholder title="Privacy Policy" />`,
})
export class PrivacyComponent {}
