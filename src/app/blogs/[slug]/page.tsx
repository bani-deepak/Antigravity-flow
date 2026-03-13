import { client, urlFor } from "@/sanity/client";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

export const revalidate = 60; // Revalidate every 60 seconds

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body?: any[];
  mainImage?: { asset: { url: string } };
  author?: { name: string; image?: { asset: { url: string } } };
  categories?: { title: string }[];
};

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, slug, publishedAt, excerpt, body,
      "mainImage": mainImage{ asset->{ url } },
      "author": author->{ name, "image": image{ asset->{ url } } },
      "categories": categories[]->{ title }
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | BANI Blog" };
  return {
    title: `${post.title} | BANI Blog`,
    description: post.excerpt || "Read this article on the BANI blog.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#030303]">
      <div className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="mb-8">
            <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors text-sm">
              ← Back to Blog
            </Link>
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span key={cat.title} className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{post.excerpt}</p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
            {post.author?.image?.asset?.url && (
              <img src={post.author.image.asset.url} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
            )}
            <div>
              <p className="text-sm font-medium text-white">{post.author?.name || "BANI Team"}</p>
              <p className="text-xs text-gray-500">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                  : ""}
              </p>
            </div>
          </div>

          {/* Body */}
          {post.body && (
            <div className="prose prose-invert prose-lg prose-purple max-w-none">
              <PortableText 
                value={post.body} 
                components={{
                  types: {
                    image: ({ value }: any) => {
                      return (
                        <div className="my-10 rounded-3xl overflow-hidden border border-white/10">
                          <img
                            src={urlFor(value).url()}
                            alt={value.alt || "Blog Image"}
                            className="w-full h-auto"
                          />
                        </div>
                      );
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
