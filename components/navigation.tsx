"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Pen } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  
  const routes = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Pen className="h-6 w-6" />
          <span className="font-bold">Modern Blog</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {route.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}