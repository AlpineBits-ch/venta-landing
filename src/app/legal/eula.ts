import { Component } from '@angular/core';
import { LegalPlaceholderComponent } from './legal-placeholder';

@Component({
  selector: 'app-eula',
  imports: [LegalPlaceholderComponent],
  template: `<app-legal-placeholder title="End User License Agreement" />`,
})
export class EulaComponent {}
