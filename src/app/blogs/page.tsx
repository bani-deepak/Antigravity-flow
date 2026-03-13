import { client } from "@/sanity/client";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Blog | BANI – Premium Design Insights",
  description: "Read our latest articles on design, development, and building a premium brand with BANI's subscription model.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { url: string } };
  categories?: { title: string }[];
};

async function getPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "mainImage": mainImage{ asset->{ url } },
      "categories": categories[]->{ title }
    }
  `);
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#030303]">
      {/* Header */}
      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-8">
          BANI<span className="text-purple-500">.</span>
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          The Blog
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto">
          Insights on design, development, and growing your brand.
        </p>
      </div>

      {/* Posts Grid */}
      <section className="container mx-auto px-6 pb-24 max-w-6xl">
        {posts.length === 0 ? (
          <div className="text-center py-24 glass rounded-3xl">
            <div className="text-6xl mb-4">✍️</div>
            <h2 className="text-2xl font-bold text-white mb-2">No posts yet</h2>
            <p className="text-gray-400">Check back soon — we've got great content coming!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blogs/${post.slug.current}`} className="group block">
                <article className="glass rounded-3xl overflow-hidden border border-white/10 h-full transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="h-52 bg-gradient-to-br from-purple-500/20 to-blue-500/10 flex items-center justify-center overflow-hidden">
                    {post.mainImage?.asset?.url ? (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-4xl">📝</div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((cat) => (
                          <span key={cat.title} className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Draft"}
                      </span>
                      <span className="text-purple-400 font-medium group-hover:underline">Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
