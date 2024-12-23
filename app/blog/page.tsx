import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/data.json";

export default function BlogPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Blog Posts</h1>
          <Input
            placeholder="Search posts..."
            className="max-w-md"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <CardContent className="p-4">
                <article className="space-y-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      {post.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="ghost">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

