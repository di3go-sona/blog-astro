# Multiterm Astro

A terminal-inspired coding blog built with Astro, featuring a sleek command-line aesthetic and modern web technologies.

## 🚀 Features

- **Terminal-inspired design** - Clean, minimalist interface with a retro terminal feel
- **Fast static site generation** with Astro
- **MDX support** for rich content authoring
- **Multiple syntax highlighting themes** - 50+ themes to choose from
- **Search functionality** with Pagefind
- **Responsive design** with Tailwind CSS
- **RSS feed** generation
- **Sitemap** generation for SEO
- **Math rendering** with KaTeX
- **Emoji support** with shortcodes
- **Admonitions** for callout boxes
- **External link handling** with proper security attributes
- **Reading time estimation**
- **Auto-generated table of contents**

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: MDX with various Remark/Rehype plugins
- **Search**: [Pagefind](https://pagefind.app/)
- **Package Manager**: pnpm
- **Typography**: JetBrains Mono font
- **Icons**: Astro Icon integration

## 🏗️ Project Structure

```
multiterm-astro/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro/React components
│   ├── content/         # Blog posts and content collections
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── plugins/         # Custom Remark/Rehype plugins
│   ├── styles/          # Global styles
│   └── site.config.ts   # Site configuration
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (18+ recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd multiterm-astro
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm postbuild` - Generate search index (runs automatically after build)
- `python scripts/import_from_obsidian.py` - Import content from Obsidian vault

## ⚙️ Configuration

### Site Configuration

Edit `src/site.config.ts` to customize:

- Site metadata (title, description, author)
- Navigation links
- Social media links
- Theme settings
- Pagination settings

### Theme Customization

The site supports multiple syntax highlighting themes. You can:

1. Change the default theme in `site.config.ts`
2. Add/remove themes from the `themes.include` array
3. Switch between single theme, theme selector, or auto light/dark mode

## 📚 Content Management

### Creating Blog Posts

#### Manual Creation

1. Add new MDX files to `src/content/articles/` or `src/content/writeups/`
2. Include frontmatter with title, description, date, and tags
3. Use MDX features like components and directives

#### Import from Obsidian

If you use Obsidian for writing, you can automatically import your notes:

1. Update the paths in `scripts/import_from_obsidian.py` to match your Obsidian vault location
2. Run the import script:
```bash
python scripts/import_from_obsidian.py
```

The script will:
- Convert Obsidian markdown files to Astro-compatible format
- Transform frontmatter to match the site's schema
- Copy and link images from your Obsidian vault
- Organize content into appropriate collections (articles/writeups)

### Supported Content Features

- **Code blocks** with syntax highlighting
- **Math equations** with KaTeX
- **Admonitions** using `:::` directive syntax
- **Emoji shortcodes** (e.g., `:rocket:` → 🚀)
- **Auto-linking headings**
- **Image optimization**
- **External link handling**

## 🎨 Customization

### Styling

- Modify `src/styles/global.css` for global styles
- Update Tailwind configuration in `astro.config.mjs`
- Customize components in `src/components/`

### Fonts

The site uses JetBrains Mono by default. To change:

1. Update the font import in `src/styles/global.css`
2. Update the `font` setting in `site.config.ts`

## 🔍 Search

Search functionality is powered by Pagefind and automatically indexes your content during the build process. The search index is generated in the `postbuild` script.

## 📱 Deployment

The site generates static files that can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Build command: `pnpm build`
Output directory: `dist/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes locally
5. Submit a pull request

## 📄 License

This project is licensed under the terms specified in `LICENSE.txt`.

## 👨‍💻 Author

**Diego Sonaglia** - [GitHub](https://github.com/di3go-sona) - [LinkedIn](https://www.linkedin.com/in/dsona/)

---

Built with ❤️ using [Astro](https://astro.build/)