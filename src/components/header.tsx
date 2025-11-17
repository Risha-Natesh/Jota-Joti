'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className={cn(isScrolled ? 'text-foreground' : 'text-white')}>
          Eco Adventurers
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Button variant="ghost" onClick={() => scrollTo('home')} className={cn(isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white')}>Home</Button>
        <Button variant="ghost" onClick={() => scrollTo('about')} className={cn(isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white')}>About</Button>
        <Button variant="ghost" onClick={() => scrollTo('activities')} className={cn(isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white')}>Activities</Button>
        <Button onClick={() => scrollTo('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90">
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
