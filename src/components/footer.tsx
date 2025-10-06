
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const ScoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" fill="currentColor" {...props}>
      <path d="M50,0L20,40h15v25l-10,10l25,45l25-45l-10-10V40h15L50,0z M50,75c-8.284,0-15-6.716-15-15s6.716-15,15-15 s15,6.716,15,15S58.284,75,50,75z"/>
    </svg>
  );

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
              <ScoutIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">JOTA-JOTI 2025</span>
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
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
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
