
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
  <section id={id} className={cn(!noPadding && 'container py-12 md:py-24', className)}>
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
    <Section id="home" noPadding className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero.gif')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-primary/30" />
      <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
        <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">17, 18 & 19 October 2025</Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">JOTA-JOTI 2025</h1>
        <p className="max-w-[700px] md:text-xl">
          Connecting Scouts, Connecting the World. The largest digital and radio Scout event on the planet!
        </p>
        <Countdown />
        <Button size="lg" asChild>
          <Link href="/register">Register Now <ArrowRight className="ml-2" /></Link>
        </Button>
      </div>
    </Section>
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
      <div className="space-y-8">
        <SectionTitle>Event Highlights</SectionTitle>
        <SectionSubtitle>Experience the best of both worlds—radio and internet—with activities designed for fun, learning, and connection.</SectionSubtitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((h, i) => (
            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
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
    </Section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul S.", role: "Scout, Troop 101", text: "JOTA-JOTI was amazing! I talked to a Scout in Japan. It felt like traveling the world from my tent.", avatar: getImage("testimonial-avatar-1") },
    { name: "Priya K.", role: "Volunteer", text: "Seeing the kids' faces light up when they made their first radio contact was priceless. A truly rewarding experience.", avatar: getImage("testimonial-avatar-2") },
    { name: "Anjali M.", role: "Parent", text: "My daughter learned so much about technology and different cultures. The event was safe, well-organized, and incredibly fun.", avatar: getImage("testimonial-avatar-3") },
  ];
  return (
    <Section id="testimonials" className="bg-muted">
      <div className="space-y-8">
        <SectionTitle>What Our Community Says</SectionTitle>
        <SectionSubtitle>Hear from past participants, volunteers, and parents about their scouting experiences.</SectionSubtitle>
        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-8 text-center space-y-4">
                      <p className="text-lg italic">"{t.text}"</p>
                      <div className="flex items-center justify-center gap-4">
                        <Avatar>
                          {t.avatar && <AvatarImage src={t.avatar.imageUrl} alt={t.name} data-ai-hint={t.avatar.imageHint} />}
                          <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{t.name}</p>
                          <p className="text-sm text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}

function LiveUpdatesSection() {
    const liveImage1 = getImage('live-update-1');
    const liveImage2 = getImage('live-update-2');
    return (
        <Section id="live-updates" className="bg-muted">
            <div className="space-y-8">
                <SectionTitle>Live From The Event</SectionTitle>
                <SectionSubtitle>During the event, this section will feature live updates, photos, and stories. Stay tuned!</SectionSubtitle>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                           {liveImage1 && <Image src={liveImage1.imageUrl} alt={liveImage1.description} data-ai-hint={liveImage1.imageHint} width={600} height={400} className="w-full h-auto object-cover"/>}
                            <div className="p-6 space-y-2">
                                <p className="text-sm text-muted-foreground">Day 1 - 11:05 AM</p>
                                <p>First contact made with a troop from Australia! The excitement is palpable! 🇦🇺 #JOTAJOTI2025</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                           {liveImage2 && <Image src={liveImage2.imageUrl} alt={liveImage2.description} data-ai-hint={liveImage2.imageHint} width={600} height={400} className="w-full h-auto object-cover"/>}
                            <div className="p-6 space-y-2">
                                <p className="text-sm text-muted-foreground">Day 1 - 02:30 PM</p>
                                <p>Our electronics workshop is in full swing. Scouts are building their own simple circuits. 💡</p>
                            </div>
                        </CardContent>
                    </Card>
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
      <TestimonialsSection />
      <LiveUpdatesSection />
      <GallerySection />
    </>
  );
}
