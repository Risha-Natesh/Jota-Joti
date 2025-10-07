
'use client';
import Image from "next/image";
import Link from "next/link";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Gamepad2, Users, Radio, Wrench, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

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
  const heroImages = ["/Images/1.jpg", "/Images/2.jpg", "/Images/3.jpg", "/Images/4.jpg"];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Carousel 
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full h-full"
        >
          <CarouselContent>
            {heroImages.map((src, index) => (
              <CarouselItem key={index}>
                <Image 
                  src={src}
                  alt={`Hero Background Image ${index + 1}`}
                  fill 
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50" />
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
            This year marks a special milestone as we host the first-ever JOTA-JOTI organized by Sri Chamundi Scouts, Outdoor Dynamix, and NSS RVU. Join us for an unforgettable experience where tradition meets technology!
          </p>
          <Button asChild>
            <Link href="https://www.jotajoti.info/" target="_blank" rel="noopener noreferrer">
              Learn more about World JOTA-JOTI <ArrowRight className="ml-2" />
            </Link>
          </Button>
           <div className="text-sm border-l-2 border-primary pl-4 pr-4 py-2 bg-muted/50 rounded-r-md">
            <h4 className="font-bold mb-2 text-primary">Did you know? About Sri Chamundi Scout Group</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Familiarly known as 21st Bangalore, the Sri Chamundi Scout Group was the first open scout unit started in Bangalore in 1918.</li>
                <li>It is the oldest existing open unit in the country and recognized as a top unit in the Asia Pacific Region.</li>
                <li>The group earned the patronage of the Royal Family, being called the "Maharaja’s own troop."</li>
                <li>SCSG established the first-ever Adult Fellowship, the Karnataka Scouts and Guides Fellowship Chamundi Guild.</li>
                <li>The group's founder, Sri M.H. Ramachandra Rao (MHR), is hailed as the "Baden Powell of Karnataka."</li>
            </ul>
          </div>
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
    { icon: Users, title: "Cultural Exchange", description: "Share your traditions and learn from others." },
    { icon: Gamepad2, title: "Exciting Games", description: "Participate in fun and competitive online games." },
    { icon: Wrench, title: "Hands-on Workshops", description: "Learn new skills from upcycling to coding." }
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

function FunActivitiesSection() {
    return (
      <Section id="dont-miss-out">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <SectionTitle>Unleash Your Inner Champion!</SectionTitle>
          <SectionSubtitle>
            Get ready for a whirlwind of excitement! We've packed JOTA-JOTI with thrilling competitions and hands-on activities. Whether you're an artist, a scientist, or a team player, there's a stage for you to shine. Compete for <span className="font-bold text-primary">cash prizes</span> and gain recognition for your amazing talents. Don't just hear about it—be a part of the action. Explore all the activities and find where you'll make your mark!
          </SectionSubtitle>
          <Button size="lg" asChild>
            <Link href="/activities">
              Explore All Activities <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FunActivitiesSection />
      <HighlightsSection />
    </>
  );
}
