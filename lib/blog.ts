export interface Author {
    name: string;
    avatar: string;
  }
  
  export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    categories: string[];
    author: Author;
    date: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      excerpt: "Learn how to build modern web applications with Next.js",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      categories: ["Next.js", "React"],
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      },
      date: "Mar 10, 2024",
    },
    {
      title: "Mastering TypeScript",
      slug: "mastering-typescript",
      excerpt: "Essential TypeScript concepts every developer should know",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      categories: ["TypeScript", "Programming"],
      author: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      },
      date: "Mar 8, 2024",
    },
    {
      title: "Web Design Trends 2024",
      slug: "web-design-trends-2024",
      excerpt: "Explore the latest trends in web design and development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      categories: ["Design", "Trends"],
      author: {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      },
      date: "Mar 5, 2024",
    },
  ];