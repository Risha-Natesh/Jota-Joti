'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      window.location.href = '/#' + id;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300',
        isScrolled
          ? 'bg-forest-gradient/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-3 font-bold text-xl text-primary"
      >
        <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
          <Sun className="w-5 h-5" />
        </div>
        <span className="text-white">
          PRAKRUTHI <span className="font-light">SHAALE</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={() => scrollTo('home')}
          className="text-white hover:bg-white/10 hover:text-white"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo('about')}
          className="text-white hover:bg-white/10 hover:text-white"
        >
          About
        </Button>
        <Link href="/program">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            Programs
          </Button>
        </Link>
        <Button
          onClick={() => scrollTo('contact')}
          className="bg-white/20 text-white border-white/30 border hover:bg-white/30"
        >
          Contact
        </Button>
      </nav>
      <div className="md:hidden">{/* Mobile menu can be added here */}</div>
    </header>
  );
};

export default Header;
