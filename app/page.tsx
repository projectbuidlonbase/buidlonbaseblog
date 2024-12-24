import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { featuredPosts } from "./data/data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 px-4 py-16 md:py-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to Buidl On Base
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Discover insightful articles, tutorials, and stories from the Base Community.
        </p>
        <Button asChild size="lg">
          <Link href="/blog">
            Start Reading <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <Card key={post.slug}>
            <CardContent className="p-4">
              <article className="space-y-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
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
  );
}

