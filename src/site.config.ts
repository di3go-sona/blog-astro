import type { SiteConfig } from '@types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://multiterm-astro.stelclementine.com',
  // The name of your site, used in the title and for SEO.
  title: 'di3go-sona',
  // The description of your site, used for SEO and RSS feed.
  description:
    'My personal blog, where I share my thoughts and experiences on coding, technology, and life.',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'Diego Sonaglia',
  // Keywords for SEO, used in the meta tags.
  tags: [
    'Blog',
    'Technology',
    'Coding',
    'Infrastructure',
    'DevOps',
    'Cybersecurity',
    'IoT',
  ],
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: '🏠Home',
      url: '/',
    },
    {
      name: '📝Articles',
      url: '/posts',
    },
    {
      name: '⛳️CTF Writeups',
      url: '/writeups',
    },
    // {
    //   name: '📟GitHub',
    //   url: 'https://github.com/di3go-sona',
    //   external: true,
    // },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'select',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'catppuccin-latte',
    // Shiki themes to bundle with the site.
    // https://expressive-code.com/guides/themes/#using-bundled-themes
    // These will be used to theme the entire site along with syntax highlighting.
    // To use light-dark-auto mode, only include a light and a dark theme in that order.
    // include: [
    //   'github-light',
    //   'github-dark',
    // ]
    include: [
      'andromeeda',
      'aurora-x',
      'ayu-dark',
      'catppuccin-frappe',
      'catppuccin-latte',
      'catppuccin-macchiato',
      'catppuccin-mocha',
      'dark-plus',
      'dracula',
      'dracula-soft',
      'everforest-dark',
      'everforest-light',
      'github-dark',
      'github-dark-default',
      'github-dark-dimmed',
      'github-dark-high-contrast',
      'github-light',
      'github-light-default',
      'github-light-high-contrast',
      'gruvbox-dark-hard',
      'gruvbox-dark-medium',
      'gruvbox-dark-soft',
      'gruvbox-light-hard',
      'gruvbox-light-medium',
      'gruvbox-light-soft',
      'houston',
      'kanagawa-dragon',
      'kanagawa-lotus',
      'kanagawa-wave',
      'laserwave',
      'light-plus',
      'material-theme',
      'material-theme-darker',
      'material-theme-lighter',
      'material-theme-ocean',
      'material-theme-palenight',
      'min-dark',
      'min-light',
      'monokai',
      'night-owl',
      'nord',
      'one-dark-pro',
      'one-light',
      'plastic',
      'poimandres',
      'red',
      'rose-pine',
      'rose-pine-dawn',
      'rose-pine-moon',
      'slack-dark',
      'slack-ochin',
      'snazzy-light',
      'solarized-dark',
      'solarized-light',
      'synthwave-84',
      'tokyo-night',
      'vesper',
      'vitesse-black',
      'vitesse-dark',
      'vitesse-light',
    ],
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/di3go-sona',
    linkedin: 'https://www.linkedin.com/in/dsona/',
    // mastodon: 'https://github.com/stelcodes/multiterm-astro',
    // email: 'https://github.com/stelcodes/multiterm-astro',
    // bluesky: 'https://github.com/stelcodes/multiterm-astro',
    // twitter: 'https://github.com/stelcodes/multiterm-astro',
  },
}

export default config
