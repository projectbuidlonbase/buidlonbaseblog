import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../../data/data.json";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  categories: string[];
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content?: {
    type: string;
    text?: string;
    level?: number;
    code?: string;
    language?: string;
  }[];
  // ... other post properties
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug) as BlogPost;

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="prose prose-stone mx-auto dark:prose-invert">
        {/* Post Metadata */}
        <div className="space-y-4 text-center">
          <div className="space-x-2">
            {post.categories.map((category: string) => (
              <span
                key={category}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <img
          src={post.image}
          alt={post.title}
          className="my-8 aspect-video w-full rounded-lg object-cover"
        />

        {/* Post Content */}
        <div className="space-y-4">
          {post.content?.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index}>{block.text}</p>;
              case "heading":
                const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag key={index} className="text-2xl font-bold">
                    {block.text}
                  </HeadingTag>
                );
              case "code":
                return (
                  <pre key={index} className="bg-gray-900 p-4 rounded-md">
                    <code className={`language-${block.language || 'text'}`}>
                      {block.code}
                    </code>
                  </pre>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </article>
  );
}
