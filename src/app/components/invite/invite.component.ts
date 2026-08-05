import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconComponent } from '../ui/icon';
import { DISCORD_INVITE, DOWNLOADS } from '../../site-links';

@Component({
  selector: 'app-invite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './invite.component.html',
})
export class InviteComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly discord = DISCORD_INVITE;
  protected readonly downloads = DOWNLOADS;

  protected readonly inviteId = signal('');
  /** Shown once the handoff has had long enough to have worked. */
  protected readonly showFallback = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.inviteId.set(id);

    if (!id) {
      this.showFallback.set(true);
      return;
    }

    this.open();

    // With the client installed the browser hands off and this tab is left
    // behind. Without it nothing happens at all, and the visitor is owed an
    // explanation rather than the blank page this page used to be.
    const timer = setTimeout(() => this.showFallback.set(true), 2500);
    this.destroyRef.onDestroy(() => clearTimeout(timer));
  }

  /**
   * Built from the route parameter rather than by rewriting the current URL,
   * so it works on localhost and preview deploys, not only on venta.gg.
   */
  protected open(): void {
    const id = this.inviteId();
    if (id) {
      window.location.href = `venta://invite/${encodeURIComponent(id)}`;
    }
  }
}
