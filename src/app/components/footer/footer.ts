import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../ui/icon';
import { DISCORD_INVITE, DOCS_URL, DONATE_URL, GITHUB_URL, STATUS_URL, SUPPORT_URL } from '../../site-links';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly discord = DISCORD_INVITE;
  protected readonly github = GITHUB_URL;
  protected readonly docs = DOCS_URL;
  protected readonly support = SUPPORT_URL;
  protected readonly status = STATUS_URL;
  protected readonly donate = DONATE_URL;
}
