/**
 * Every outbound link the site uses, in one place.
 *
 * The site previously carried four different Discord invites across five
 * templates, three of them dead. One constant means an invite change is a
 * one-line change.
 */
export const DISCORD_INVITE = 'https://discord.gg/RX7VTTKAqa';
export const GITHUB_URL = 'https://github.com/orgs/AlpineBits-ch/repositories';
/** The server itself - AGPL-3.0, which is the part that matters to self-hosters. */
export const BACKEND_REPO_URL = 'https://github.com/AlpineBits-ch/AlpineBackend';
export const DOCS_URL = 'https://docs.venta.gg';
export const SUPPORT_URL = 'https://support.venta.gg';
export const STATUS_URL = 'https://status.venta.gg';
export const DONATE_URL = 'https://donate.stripe.com/cNi00k5F7eNdgXwcxjeZ200';
export const CONTACT_EMAIL = 'dominic@alpinebits.ch';

/**
 * The web client.
 *
 * The same client as the download, built for the browser, signing in against
 * the same instances. It is a real way in, not a demo - but the desktop build
 * keeps the things a browser tab cannot do (global push-to-talk hotkeys,
 * hardware-encoded screen sharing, rich presence), so copy around this link
 * offers it as the no-install option rather than as the better one.
 */
export const WEB_APP_URL = 'https://app.venta.gg';

/**
 * The iOS beta.
 *
 * TestFlight, not the App Store - the public invite link accepts testers before
 * a build is live, so the page can send people here while the first build is
 * still on its way. Copy around this link must not promise an App Store listing
 * or an installable build today.
 */
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/WeGjjCPj';

/**
 * Release downloads.
 *
 * These are the only three targets the update API serves - macOS, Android and
 * AppImage all return 400 - so they are the only three offered here.
 *
 * Windows is deliberately the NSIS `windows-x86_64` target and not
 * `windows-x86_64-msi`, even though the API still serves both. The two are not
 * interchangeable:
 *
 *   - NSIS installs per-user into %LOCALAPPDATA%\Venta, so it needs no UAC
 *     prompt and the updater can install silently (`/S /R`).
 *   - The MSI installs per-machine into Program Files, so every update needs
 *     elevation. Under the updater's quiet install mode the UAC prompt is
 *     suppressed and the install fails silently instead.
 *
 * Worse, the two disagree about where the app lives, so a client that installed
 * from the MSI and then updated via NSIS ends up with two parallel installs -
 * NSIS restores its own recorded location and knows nothing about the MSI's.
 * Serving one installer for both first-install and update is what keeps those in
 * step.
 */
export interface DownloadTarget {
  id: string;
  os: 'windows' | 'linux';
  label: string;
  format: string;
  url: string;
  note?: string;
  recommended?: boolean;
}

const DOWNLOAD_BASE = 'https://api.venta.gg/api/v1/update/download/latest';

export const DOWNLOADS: DownloadTarget[] = [
  {
    id: 'windows-nsis',
    os: 'windows',
    label: 'Windows',
    format: '.exe',
    url: `${DOWNLOAD_BASE}/windows-x86_64`,
    recommended: true,
  },
  {
    id: 'linux-deb',
    os: 'linux',
    label: 'Linux',
    format: '.deb',
    url: `${DOWNLOAD_BASE}/linux-x86_64`,
    note: 'Debian and Ubuntu',
  },
  {
    id: 'linux-rpm',
    os: 'linux',
    label: 'Linux',
    format: '.rpm',
    url: `${DOWNLOAD_BASE}/linux-x86_64-rpm`,
    note: 'Fedora and RHEL',
  },
];
