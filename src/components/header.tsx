'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center justify-between p-4 transition-colors duration-300 bg-background/80 backdrop-blur-sm shadow-sm'
      )}
    >
      <Link href="/" className="flex items-center gap-3 font-bold text-xl text-primary">
        <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
            <Sun className="w-5 h-5" />
        </div>
        <span>
          PRAKRUTHI <span className="font-light">SHAALE</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-2">
        <Button variant="ghost" onClick={() => scrollTo('home')}>Home</Button>
        <Button variant="ghost" onClick={() => scrollTo('about')}>About</Button>
        <Button onClick={() => scrollTo('contact')}>
          Contact
        </Button>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu can be added here */}
      </div>
    </header>
  );
};

export default Header;
