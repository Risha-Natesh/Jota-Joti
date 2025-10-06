
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
  { href: "/#highlights", label: "Highlights" },
  { href: "/#partners", label: "Organizers" },
  { href: "/#register", label: "Registration" },
  { href: "/#venue", label: "Venue" },
  { href: "/#contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const JJLogo = () => (
    <div className="flex items-center justify-center h-10 w-10 bg-white rounded-full">
        <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500">JJ</span>
    </div>
)

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <JJLogo />
            <div>
              <span className="font-bold font-headline">JOTA-JOTI 2025</span>
              <p className="text-xs">Oct 17-19, 2025</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-2">
            <nav className="hidden space-x-1 text-sm font-medium md:flex">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "px-4 py-2 rounded-md transition-colors",
                        link.label === 'Home' ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-white/20'
                    )}
                >
                    {link.label}
                </Link>
                ))}
            </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/20">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gradient-to-br from-blue-600 via-purple-500 to-orange-500 text-white border-none">
                <Link href="/" className="flex items-center space-x-3 mb-8">
                    <JJLogo />
                     <div>
                        <span className="font-bold font-headline">JOTA-JOTI 2025</span>
                        <p className="text-xs">Oct 17-19, 2025</p>
                    </div>
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                        <Link href={link.href} className="px-3 py-2 text-lg rounded-md hover:bg-white/20">
                        {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
