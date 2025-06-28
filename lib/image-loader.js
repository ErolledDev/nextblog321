// Custom image loader for Cloudflare Workers
export default function cloudflareLoader({ src, width, quality }) {
  // For external URLs, return as-is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, you might want to use Cloudflare Images
  // or return the original path for now
  return src;
}