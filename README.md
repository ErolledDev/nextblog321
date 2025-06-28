# Professional Next.js Blog with Cloudflare Workers & ISR

A modern, professional blog built with Next.js and deployed on Cloudflare Workers with Incremental Static Regeneration (ISR) for rapid content updates without redeployment.

## 🚀 Key Features

- **Rapid Content Updates**: ISR with 2-minute revalidation for fresh content
- **Modern Design**: Clean, professional interface inspired by Medium
- **Dynamic Content**: Fetches content from external API with automatic updates
- **SEO Optimized**: Full SEO support with meta tags, Open Graph, and Twitter Cards
- **Edge Performance**: Deployed on Cloudflare Workers for global distribution
- **Responsive**: Mobile-first design that works on all devices
- **Search & Filter**: Built-in search and category filtering
- **Markdown Support**: Full markdown rendering with syntax highlighting
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router and ISR
- **Deployment**: Cloudflare Workers with @cloudflare/next-on-pages
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content**: Markdown with react-markdown and syntax highlighting
- **Type Safety**: TypeScript
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account
- Wrangler CLI

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure your settings.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Cloudflare Workers Deployment

### Prerequisites
1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

### Deployment Steps

1. **Build for Cloudflare Workers**
   ```bash
   npm run pages:build
   ```

2. **Preview locally**
   ```bash
   npm run preview
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy
   ```

### Configuration

The project uses `@cloudflare/next-on-pages` to transform Next.js for Cloudflare Workers:

- **ISR Support**: Pages revalidate every 2 minutes
- **Edge Runtime**: Optimized for Cloudflare's edge network
- **Custom Headers**: Configured for optimal caching
- **Environment Variables**: Managed through Wrangler

## ⚡ ISR (Incremental Static Regeneration)

This blog uses ISR to provide:

- **Fresh Content**: Pages update every 2 minutes automatically
- **Fast Performance**: Serves cached content while regenerating in background
- **SEO Benefits**: Pre-rendered HTML for search engines
- **No Downtime**: Updates happen without redeployment

### How ISR Works

1. **Initial Request**: Page is generated and cached
2. **Subsequent Requests**: Served from cache instantly
3. **Background Regeneration**: After 2 minutes, page regenerates on next request
4. **Fresh Content**: New content appears without manual deployment

## 📝 Content API

The blog fetches content from your API endpoint with ISR. Expected format:

```json
[
  {
    "id": "unique-id",
    "title": "Article Title",
    "slug": "article-slug", 
    "content": "# Markdown content here...",
    "featuredImageUrl": "https://example.com/image.jpg",
    "metaDescription": "SEO description",
    "seoTitle": "SEO Title",
    "keywords": ["keyword1", "keyword2"],
    "author": "Author Name",
    "categories": ["Category 1", "Category 2"],
    "tags": ["tag1", "tag2"],
    "status": "published",
    "publishDate": "2025-01-01T00:00:00Z",
    "createdAt": "2025-01-01T00:00:00Z", 
    "updatedAt": "2025-01-01T00:00:00Z"
  }
]
```

## 🎨 Customization

### Changing ISR Revalidation Time

Edit the `revalidate` export in pages:

```typescript
// Revalidate every 60 seconds (1 minute)
export const revalidate = 60;

// Revalidate every 300 seconds (5 minutes)
export const revalidate = 300;
```

### Customizing Design

- Edit `tailwind.config.ts` for theme customization
- Modify components in `components/` directory
- Update styles in `app/globals.css`

### API Configuration

- Update the API URL in environment variables
- Modify the content structure in `types/blog.ts` if needed

## 🔍 SEO Features

- Dynamic meta tags based on content
- Open Graph and Twitter Card support
- Structured data for articles
- Automatic sitemap generation
- ISR for fresh content with SEO benefits

## 🚦 Performance Benefits

- **ISR**: Fresh content without full rebuilds
- **Edge Distribution**: Global Cloudflare network
- **Optimized Caching**: Smart cache headers
- **Pre-rendered HTML**: Better Core Web Vitals
- **Background Updates**: No user-facing delays

## 📊 Monitoring & Analytics

- Real-time logs via Wrangler
- Cloudflare Analytics dashboard
- Performance metrics
- Error tracking

## 🔧 Development Commands

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm run lint               # Run ESLint

# Cloudflare Workers
npm run pages:build        # Build for Cloudflare Workers
npm run preview           # Preview locally with Wrangler
npm run deploy            # Deploy to Cloudflare Workers
npm run cf-typegen        # Generate Cloudflare types
```

## 🌐 Environment Variables

Configure in `wrangler.toml` or Cloudflare dashboard:

```toml
[vars]
NODE_ENV = "production"
NEXT_PUBLIC_API_URL = "https://your-api.com/content.json"
NEXT_PUBLIC_SITE_URL = "https://your-domain.com"
NEXT_PUBLIC_SITE_NAME = "Your Blog Name"
```

## 🚀 Benefits of This Setup

1. **Rapid Updates**: Content changes appear in 1-2 minutes
2. **Global Performance**: Cloudflare's edge network
3. **SEO Optimized**: Pre-rendered HTML with fresh content
4. **Cost Effective**: Efficient caching and edge computing
5. **Developer Experience**: Modern tooling and TypeScript
6. **Scalable**: Handles traffic spikes automatically

## 📧 Support

For questions or support, please check the contact page or reach out through the configured contact methods.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, ISR, and deployed on Cloudflare Workers.