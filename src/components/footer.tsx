
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Logo = () => (
    <Image 
        src="/Logo.png" 
        alt="JOTA JOTI Logo"
        width={120}
        height={60}
        className="object-contain"
    />
);

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
              <Logo />
            </Link>
            <p className="text-sm">Connecting Scouts, Connecting the World.</p>
            <p className="text-xs">&copy; {new Date().getFullYear()} Sri Chamundi Scout Group & NSS RVU. All rights reserved.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/919886633810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} /> +91 98866 33810</a></li>
              <li><a href="https://wa.me/919945845127" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} /> +91 99458 45127</a></li>
              <li><a href="https://wa.me/919980952919" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} /> +91 99809 52919</a></li>
              <li><a href="mailto:21stbangalore@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={16} /> 21stbangalore@gmail.com</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex">
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.instagram.com/chamundis1918?utm_source=qr&igsh=YmtjZnZnNXNmbnRu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
