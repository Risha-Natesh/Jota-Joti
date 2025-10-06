
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/activities", label: "Activities" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#partners", label: "Organizers" },
  { href: "/#register", label: "Registration" },
  { href: "/#venue", label: "Venue" },
  { href: "/#contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const ScoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" fill="currentColor" {...props}>
      <path d="M50,0L20,40h15v25l-10,10l25,45l25-45l-10-10V40h15L50,0z M50,75c-8.284,0-15-6.716-15-15s6.716-15,15-15 s15,6.716,15,15S58.284,75,50,75z"/>
    </svg>
);


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ScoutIcon className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline">JOTA-JOTI 2025</span>
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
                 <ScoutIcon className="h-8 w-8 text-primary" />
                 <span className="font-bold">JOTA-JOTI 2025</span>
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
            <Link href="/#register">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

