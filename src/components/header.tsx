'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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

  const navTextColor = 'text-[#03110d]';
  const textShadow = 'drop-shadow(0 1px 2px rgba(255,255,255,0.4))'
  const navHoverColor = 'hover:bg-black/10';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-3 font-bold text-xl"
      >
        <Image src="/Images/Logo.jpg" alt="Prakruthi Shaale Logo" width={40} height={40} className="rounded-md" />
        <span className={cn(navTextColor)} style={{filter: isScrolled ? 'none' : textShadow }}>
          PRAKRUTHI <span className="font-light">SHAALE</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={() => scrollTo('home')}
          className={cn(navTextColor, navHoverColor)}
          style={{filter: isScrolled ? 'none' : textShadow }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo('about')}
          className={cn(navTextColor, navHoverColor)}
           style={{filter: isScrolled ? 'none' : textShadow }}
        >
          About
        </Button>
        <Link href="/program">
          <Button
            variant="ghost"
            className={cn(navTextColor, navHoverColor)}
             style={{filter: isScrolled ? 'none' : textShadow }}
          >
            Programs
          </Button>
        </Link>
        <Button
          onClick={() => scrollTo('contact')}
          className={cn(
            'border',
            'border-[#03110d]/50 bg-black/5 text-[#03110d] hover:bg-black/10'
          )}
           style={{filter: isScrolled ? 'none' : textShadow }}
        >
          Contact
        </Button>
      </nav>
      <div className="md:hidden">{/* Mobile menu can be added here */}</div>
    </header>
  );
};

export default Header;
