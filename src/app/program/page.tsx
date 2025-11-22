'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Antenna,
  Cross,
  Users,
  Footprints,
  Puzzle,
  GitCommit,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function ProgramPage() {
  const approachImage = PlaceHolderImages.find((img) => img.id === 'approach');

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
                {approachImage && (
                  <Image
                    src={approachImage.imageUrl}
                    alt={approachImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={approachImage.imageHint}
                  />
                )}
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

        <section id="eco-connect-activities" className="py-20 bg-background">
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
