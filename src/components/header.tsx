
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/activities", label: "Activities" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/organizers", label: "Organizers" },
  { href: "/venue", label: "Venue" },
  { href: "/register", label: "Registration" },
  { href: "/faq", label: "FAQ" },
];

const Logo = () => (
    <Image 
        src="/Logo.png" 
        alt="JOTA JOTI Logo"
        width={120}
        height={60}
        className="object-contain"
        priority
    />
);


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                 <Logo />
              </Link>
              <div className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link href={link.href} className="px-3 py-2 text-lg font-medium rounded-md hover:bg-muted">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild>
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
