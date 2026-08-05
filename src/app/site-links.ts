/**
 * Every outbound link the site uses, in one place.
 *
 * The site previously carried four different Discord invites across five
 * templates, three of them dead. One constant means an invite change is a
 * one-line change.
 */
export const DISCORD_INVITE = 'https://discord.gg/RX7VTTKAqa';
export const GITHUB_URL = 'https://github.com/orgs/AlpineBits-ch/repositories';
export const DOCS_URL = 'https://docs.venta.gg';
export const SUPPORT_URL = 'https://support.venta.gg';
export const STATUS_URL = 'https://status.venta.gg';
export const DONATE_URL = 'https://donate.stripe.com/cNi00k5F7eNdgXwcxjeZ200';
export const CONTACT_EMAIL = 'dominic@alpinebits.ch';

/**
 * Release downloads.
 *
 * These are the only three targets the update API serves - macOS, Android and
 * AppImage all return 400 - so they are the only three offered here.
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
    id: 'windows-msi',
    os: 'windows',
    label: 'Windows',
    format: '.msi',
    url: `${DOWNLOAD_BASE}/windows-x86_64-msi`,
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
