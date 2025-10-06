
import Image from "next/image";
import Link from "next/link";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, Globe, Gamepad2, Users, Radio, Wrench, MapPin, ArrowRight, MessageCircle, Instagram, Mail, Phone, Clock, Calendar } from "lucide-react";
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
  const heroImage = getImage("hero-banner");
  return (
    <Section id="home" noPadding className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-primary/50" />
      <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
        <Badge variant="secondary" className="text-lg py-2 px-4">17, 18 & 19 October 2025</Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">JOTA-JOTI 2025</h1>
        <p className="max-w-[700px] md:text-xl">
          Connecting Scouts, Connecting the World. The largest digital and radio Scout event on the planet!
        </p>
        <Countdown />
        <Button size="lg" asChild>
          <Link href="#register">Register Now <ArrowRight className="ml-2" /></Link>
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

function ScheduleSection() {
  const schedules = [
    {
      location: "Sri Chamundi Scout Group",
      days: {
        "Oct 17 (Fri)": [
          { time: "09:00 AM - 10:00 AM", activity: "Registrations for Team Games" },
          { time: "10:00 AM - 12:00 PM", activity: "Team Games & Joti Set Up" },
          { time: "12:00 PM - 05:00 PM", activity: "JOTI Station will be live" },
        ],
        "Oct 18 (Sat)": [
          { time: "09:00 AM - 10:00 AM", activity: "Registrations for Judging Camp" },
          { time: "10:00 AM - 12:00 PM", activity: "JOTI Station will be live Judging Camp / Community Volunteering / Gabion Wall Preparation" },
          { time: "12:00 PM - 04:00 PM", activity: "JOTI Station will be live" },
        ],
        "Oct 19 (Sun)": [
          { time: "09:00 AM - 10:00 AM", activity: "Open Day" },
          { time: "10:00 AM - 12:00 PM", activity: "Community Art" },
          { time: "04:00 PM - 05:00 PM", activity: "Validictory" },
        ],
      }
    },
    {
      location: "Panchavati",
      days: {
        "Oct 17 (Fri)": [
          { time: "09:00 AM - 10:00 AM", activity: "Registrations for Arts & Science Competitions" },
          { time: "10:00 AM - 01:00 PM", activity: "Science, Arts Competitions" },
          { time: "01:00 PM - 05:00 PM", activity: "JOTA SET UP" },
        ],
        "Oct 18 (Sat)": [
          { time: "09:00 AM - 10:00 AM", activity: "Jota Walkin starts" },
          { time: "10:00 AM - 01:00 PM", activity: "Stalls / Exhibitions / workshops etc will go Live" },
          { time: "04:00 PM - 05:00 PM", activity: "Youth Got Talent" },
        ],
        "Oct 19 (Sun)": [
          { time: "09:00 AM - 01:00 PM", activity: "Open Day" },
          { time: "04:00 PM - 05:00 PM", activity: "Validictory" },
        ],
      }
    }
  ];

  return (
    <Section id="schedule">
      <div className="space-y-8">
        <SectionTitle>Event Schedule</SectionTitle>
        <SectionSubtitle>Three days packed with adventure, learning, and friendship. Here’s what to expect.</SectionSubtitle>
        <Tabs defaultValue={schedules[0].location} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {schedules.map(schedule => <TabsTrigger key={schedule.location} value={schedule.location}>{schedule.location}</TabsTrigger>)}
          </TabsList>
          {schedules.map(schedule => (
            <TabsContent key={schedule.location} value={schedule.location}>
              <Tabs defaultValue={Object.keys(schedule.days)[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {Object.keys(schedule.days).map(day => <TabsTrigger key={day} value={day}>{day}</TabsTrigger>)}
                </TabsList>
                {Object.entries(schedule.days).map(([day, activities]) => (
                  <TabsContent key={day} value={day}>
                    <Card>
                      <CardContent className="p-6">
                        <ul className="space-y-4">
                          {activities.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground w-36">
                                <Clock size={14} />{item.time}
                              </div>
                              <div className="font-semibold flex-1">{item.activity}</div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
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

function OrganizersSection() {
  const partners = [
    { name: "Sri Chamundi Scout Group", logo: getImage("partner-logo-1") },
    { name: "NSS RVU", logo: getImage("partner-logo-2") },
    { name: "Outdoor Dynamix", logo: getImage("partner-logo-3") },
    { name: "Prakruthi Shaale", logo: getImage("partner-logo-4") },
  ];
  return (
    <Section id="partners">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
            <SectionTitle>Organizers & Partners</SectionTitle>
            <SectionSubtitle>This event is made possible by the collaborative efforts of our dedicated organizers and supportive partners.</SectionSubtitle>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((p) => p.logo && (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <Image
                src={p.logo.imageUrl}
                alt={p.name}
                data-ai-hint={p.logo.imageHint}
                width={150}
                height={75}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
              <span className="text-sm font-semibold text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </div>
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

function VenueSection() {
  return (
    <Section id="venue" className="bg-muted">
      <div className="space-y-8">
        <SectionTitle>Venue Details</SectionTitle>
        <SectionSubtitle>Our event will be hosted across two beautiful locations, providing ample space for all our activities.</SectionSubtitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><MapPin/> Panchavati</CardTitle>
              <CardDescription>Main hub for workshops & digital activities.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Detailed address and transport information will be shared with registered participants.</p>
              <Button asChild variant="outline">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowRight className="ml-2" /></a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><MapPin/> Sri Chamundi Scouts Group</CardTitle>
              <CardDescription>Base for radio communication and outdoor games.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Parking is available on-site. We encourage carpooling.</p>
              <Button asChild variant="outline">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowRight className="ml-2" /></a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function DownloadsAndRegisterSection() {
  const downloads = [
    { name: "Event Brochure", file: "#" },
    { name: "Schedule PDF", file: "#" },
    { name: "Parental Consent Form", file: "#" },
  ];
  return (
    <Section id="register">
        <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
                <Card className="h-full flex flex-col bg-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle className="font-headline text-4xl">Join the Adventure!</CardTitle>
                        <CardDescription className="text-primary-foreground/80">Registration is now open. Secure your spot for an unforgettable weekend of fun, learning, and global friendship. Deadline: 30th September 2025.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center">
                        <Button size="lg" variant="secondary" asChild className="transform hover:scale-105 transition-transform">
                            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">Register via Google Forms <ArrowRight className="ml-2"/></a>
                        </Button>
                    </CardContent>
                    <div className="p-6 text-sm text-primary-foreground/80">
                        <p>Registration is open for: <strong>Participants</strong>, <strong>Volunteers</strong>, and <strong>Parents</strong>.</p>
                    </div>
                </Card>
            </div>
            <div className="lg:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold font-headline">Downloadables</h3>
                <p className="text-muted-foreground">Get all the information you need right here.</p>
                <ul className="space-y-3">
                    {downloads.map((d, i) => (
                        <li key={i}>
                            <Button variant="outline" className="w-full justify-between" asChild>
                                <a href={d.file} download>
                                    {d.name}
                                    <Download size={16}/>
                                </a>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "Who can participate?", a: "The event is open to all members of the Scout and Guide movements, as well as students and parents interested in the program. No prior experience is required!" },
    { q: "Is there an age limit?", a: "While JOTA-JOTI is for all ages, certain workshops may have age recommendations. Generally, participants aged 10 and above will get the most out of the activities." },
    { q: "What should I bring?", a: "A detailed list will be sent to registered participants. Essentials include comfortable clothing, a water bottle, a notebook, and most importantly, a curious and enthusiastic spirit!" },
    { q: "Is there a registration fee?", a: "Yes, there is a nominal fee to cover the costs of materials, food, and logistics. The exact amount is mentioned in the registration form." },
    { q: "What safety measures are in place?", a: "Safety is our top priority. We will have trained first-aid personnel on-site, and all activities will be supervised by experienced adult leaders. We will adhere to all local safety guidelines." },
  ];
  return (
    <Section id="faq" className="bg-muted">
      <div className="space-y-8 max-w-3xl mx-auto">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
      <ScheduleSection />
      <TestimonialsSection />
      <OrganizersSection />
      <LiveUpdatesSection />
      <GallerySection />
      <VenueSection />
      <DownloadsAndRegisterSection />
      <FaqSection />
    </>
  );
}
