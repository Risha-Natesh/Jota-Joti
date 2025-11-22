'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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
          ? 'bg-forest-gradient/90 backdrop-blur-md shadow-lg'
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
        <span className="text-black">
          PRAKRUTHI <span className="font-light">SHAALE</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={() => scrollTo('home')}
          className="text-black hover:bg-black/10 hover:text-black"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo('about')}
          className="text-black hover:bg-black/10 hover:text-black"
        >
          About
        </Button>
        <Link href="/program">
          <Button
            variant="ghost"
            className="text-black hover:bg-black/10 hover:text-black"
          >
            Programs
          </Button>
        </Link>
        <Button
          onClick={() => scrollTo('contact')}
          className="bg-black/20 text-black border-black/30 border hover:bg-black/30"
        >
          Contact
        </Button>
      </nav>
      <div className="md:hidden">{/* Mobile menu can be added here */}</div>
    </header>
  );
};

export default Header;
