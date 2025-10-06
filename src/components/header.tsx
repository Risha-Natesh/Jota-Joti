
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/schedule", label: "Schedule" },
  { href: "/activities", label: "Activities" },
  { href: "/#venue", label: "Venue" },
  { href: "/faq", label: "FAQ" },
];

const ScoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" fill="currentColor" {...props}>
      <path d="M50,0L20,40h15v25l-10,10l25,45l25-45l-10-10V40h15L50,0z M50,75c-8.284,0-15-6.716-15-15s6.716-15,15-15 s15,6.716,15,15S58.284,75,50,75z"/>
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-muted">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ScoutIcon className="h-7 w-7 text-primary" />
            <span className="font-bold font-headline text-foreground">JOTA-JOTI 2025</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:flex">
            <Link href="/#register">Register Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2 mb-8">
                  <ScoutIcon className="h-7 w-7 text-primary" />
                  <span className="font-bold font-headline">JOTA-JOTI 2025</span>
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                        <Link href={link.href} className="px-2 py-2 text-lg rounded-md hover:bg-accent">
                        {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="mt-4">
                        <Link href="/#register">Register Now</Link>
                    </Button>
                  </SheetClose>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
