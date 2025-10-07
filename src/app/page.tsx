
import Image from "next/image";
import Link from "next/link";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Gamepad2, Users, Radio, Wrench, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const Section = ({ id, className, children, noPadding }: { id: string, className?: string, children: React.ReactNode, noPadding?: boolean }) => (
  <section id={id} className={cn('py-16 md:py-24', !noPadding && 'container', className)}>
    {children}
  </section>
);

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center", className)}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center", className)}>
    {children}
  </p>
);

function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Hero.gif" 
          alt="Hero Background" 
          fill 
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-primary/30" />
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
        <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">17, 18 & 19 October 2025</Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">JOTA-JOTI 2025</h1>
        <p className="max-w-[700px] md:text-xl">
          Connecting Scouts, Connecting the World. The largest digital and radio Scout event on the planet!
        </p>
        <Countdown />
        <p className="font-theme text-3xl font-bold tracking-wider text-amber-300 drop-shadow-md italic">
          World Shaped by youth
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Register Now <ArrowRight className="ml-2" /></Link>
        </Button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <SectionTitle className="text-left">Welcome to JOTA-JOTI</SectionTitle>
          <p className="text-muted-foreground">
            Jamboree-on-the-Air and Jamboree-on-the-Internet (JOTA-JOTI) is an annual digital and amateur radio event that connects Scouts from all over the world. It’s a unique opportunity to foster friendship, promote global citizenship, and develop essential 21st-century skills through a weekend of fun and engaging activities.
          </p>
          <p className="text-muted-foreground">
            This year marks a special milestone as we host the first-ever JOTA-JOTI organized by NSS RVU & Sri Chamundi Scouts. Join us for an unforgettable experience where tradition meets technology!
          </p>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="font-headline">Our Goals</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary mt-1" />
                <div><h3 className="font-bold">Global Friendship</h3><p className="text-sm text-muted-foreground">Connect with scouts from diverse cultures and backgrounds.</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-8 w-8 text-primary mt-1" />
                <div><h3 className="font-bold">Active Citizenship</h3><p className="text-sm text-muted-foreground">Learn about global issues and how you can make a difference.</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Wrench className="h-8 w-8 text-primary mt-1" />
                <div><h3 className="font-bold">Skill Development</h3><p className="text-sm text-muted-foreground">Gain hands-on experience in radio communication, digital literacy, and teamwork.</p></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function HighlightsSection() {
  const highlights = [
    { icon: Radio, title: "Radio Communication", description: "Talk to scouts worldwide using amateur radio." },
    { icon: Globe, title: "Digital Interaction", description: "Engage in online chats, video calls, and global challenges." },
    { icon: Users, title: "Cultural Exchange", description: "Share your traditions and learn from others in our virtual campfire." },
    { icon: Gamepad2, title: "Exciting Games", description: "Participate in fun and competitive online games." },
    { icon: Wrench, title: "Hands-on Workshops", description: "Learn new skills from electronics to coding." }
  ];
  return (
    <Section id="highlights" className="bg-muted">
      <div className="container">
        <div className="space-y-8">
            <SectionTitle>Event Highlights</SectionTitle>
            <SectionSubtitle>Experience the best of both worlds—radio and internet—with activities designed for fun, learning, and connection.</SectionSubtitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((h, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                    <h.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-headline">{h.title}</h3>
                    <p className="text-sm text-muted-foreground">{h.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </Section>
  );
}

function GallerySection() {
  const galleryImages = ["gallery-1", "gallery-2", "gallery-3", "gallery-4"].map(id => getImage(id)).filter(Boolean) as ImagePlaceholder[];
  return (
    <Section id="gallery">
      <div className="space-y-8">
        <SectionTitle>Event Gallery</SectionTitle>
        <SectionSubtitle>A glimpse into our past scouting adventures. We can't wait to add memories from JOTA-JOTI 2025 here!</SectionSubtitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={img.imageUrl}
                alt={img.description}
                data-ai-hint={img.imageHint}
                width={400}
                height={300}
                className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <GallerySection />
    </>
  );
}
