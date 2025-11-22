'use client';
import Image from 'next/image';
import Header from '@/components/header';
import {
  Antenna,
  Cross,
  Users,
  Footprints,
  Puzzle,
  GitCommit,
  Leaf,
  Building,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

export default function ProgramPage() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Young Sprouts Program',
      description: 'Engaging the next generation with hands-on nature and science programs.',
      href: '/program/youth',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      icon: Building,
      title: 'Corporate Green Teams',
      description: 'Partner with us to create impactful environmental and team-building experiences.',
      href: '/program/corporate',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: HeartHandshake,
      title: 'Community Champions',
      description: 'Join our volunteer efforts to make a tangible difference in our community.',
      href: '/program/community',
      color: 'text-red-500',
      bg: 'bg-red-500/10',
    }
  ];

  const ecoConnectActivities = [
    {
      icon: Antenna,
      title: 'HAM Radio Exploration',
    },
    {
      icon: GitCommit,
      title: 'Rope Work & Knots',
    },
    {
      icon: Cross,
      title: 'Essential First Aid',
    },
    {
      icon: Footprints,
      title: 'Panchavati Nature Walk',
    },
    {
      icon: Puzzle,
      title: 'Ice Breaker Games',
    },
    {
      icon: Users,
      title: 'Team Building',
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <section id="programs" className="py-20 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                Our Approach & Programs
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                Empowering schools through hands-on sustainability education.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="h-96 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Images/approach.png"
                  alt="A diagram illustrating the educational approach."
                  fill
                  className="object-cover"
                  data-ai-hint="approach diagram"
                />
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-2">
                    Outdoor Activities & Workshops
                  </h3>
                  <p className="text-foreground/80">
                    Activities like nature walks, bird watching, and gardening
                    promote environmental awareness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-2">
                    Experiential Learning Programs
                  </h3>
                  <p className="text-foreground/80">
                    Hands-on activities enrich curriculum and support academic,
                    emotional, and social growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-2">
                    Volunteering, Team-building & Leadership Programs
                  </h3>
                  <p className="text-foreground/80">
                    Collaborative challenges enhance communication and
                    leadership skills among participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="initiatives" className="py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                Explore Our Initiatives
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                Discover how you can get involved and make a difference.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <Link href={initiative.href} key={initiative.title} className="group block">
                    <div className="relative h-full bg-card p-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-2">
                      <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${initiative.bg} opacity-50 blur-xl`}></div>
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${initiative.bg}`}>
                          <Icon className={`w-8 h-8 ${initiative.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{initiative.title}</h3>
                        <p className="text-foreground/70 mb-4">{initiative.description}</p>
                        <div className="flex items-center font-semibold text-accent group-hover:text-primary transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="eco-connect-activities" className="py-20 bg-secondary/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-4">
              Eco Connect Activities
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
              Engaging, hands-on activities designed to build skills and foster
              teamwork.
            </p>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {ecoConnectActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 md:basis-1/4 lg:basis-1/6"
                    >
                      <div className="flex flex-col items-center gap-3 text-center group transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 ring-2 ring-accent/20">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {activity.title}
                        </h4>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
