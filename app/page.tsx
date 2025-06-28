import { BlogPosts } from '@/components/blog-posts';
import { Hero } from '@/components/hero';
import { FeaturedPosts } from '@/components/featured-posts';
import { getAllContent } from '@/lib/content';

// Enable ISR with 2-minute revalidation
export const revalidate = 120;

export default async function Home() {
  // Pre-fetch content on the server for better SEO and performance
  const posts = await getAllContent();
  
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedPosts initialPosts={posts.slice(0, 6)} />
      <BlogPosts initialPosts={posts} />
    </div>
  );
}