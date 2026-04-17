import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="section-title">Learn & Glow</h2>
          <p className="section-subtitle mt-2">
            Skincare education from dermatologists and Ayurvedic experts
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-sage-600 hover:text-sage-800 transition-colors"
        >
          All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group card hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="badge bg-white/90 backdrop-blur-sm text-sage-700 text-xs">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} min read</span>
                <span>·</span>
                <span>{post.author}</span>
              </div>
              <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-sage-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1 text-sage-600 text-xs font-semibold pt-1">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
