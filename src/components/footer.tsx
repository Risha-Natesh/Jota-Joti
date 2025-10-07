
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
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
              <li><a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} /> POC One: +91 12345 67890</a></li>
              <li><a href="mailto:contact@jota-joti-2025.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={16} /> POC Two: contact@jota-joti-2025.com</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.instagram.com/chamundis1918?utm_source=qr&igsh=YmtjZnZnNXNmbnRu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Group"><MessageCircle /></a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
