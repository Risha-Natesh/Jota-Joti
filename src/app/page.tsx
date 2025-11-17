'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, Sprout, Wind } from 'lucide-react';

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');
  const activity1Image = PlaceHolderImages.find((img) => img.id === 'activity1');
  const activity2Image = PlaceHolderImages.find((img) => img.id === 'activity2');
  const activity3Image = PlaceHolderImages.find((img) => img.id === 'activity3');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="relative h-screen flex items-center justify-center text-center text-white"
        >
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Kids enjoying nature"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Adventure Awaits. Explore With Us.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Discover the wild, protect our planet, and make new friends. Join
              our outdoor activities and become an Eco Adventurer!
            </p>
            <Button
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollTo('activities')}
            >
              See Our Adventures
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="px-4">
              <h2 className="text-4xl font-bold text-primary">
                Our Mission: Connect & Protect
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We believe that the best way to inspire a love for our planet is
                to experience its wonders firsthand. Our mission is to get kids
                outdoors, engaging them in fun, hands-on activities that foster a
                deep respect for the environment and a desire to protect it for
                generations to come.
              </p>
              <Button
                size="lg"
                className="mt-6"
                onClick={() => scrollTo('contact')}
              >
                Get Involved
              </Button>
            </div>
            <div className="h-80 relative rounded-xl overflow-hidden">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt="Team of volunteers planting trees"
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="activities" className="py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              From trekking through forests to cleaning up our coastlines, every
              activity is an adventure with a purpose.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  {activity1Image && (
                    <div className="h-48 relative mb-4 rounded-t-lg overflow-hidden">
                      <Image
                        src={activity1Image.imageUrl}
                        alt="Nature Hikes"
                        fill
                        className="object-cover"
                        data-ai-hint={activity1Image.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="flex items-center gap-2">
                    <Mountain /> Nature Hikes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore local trails, learn to identify plants and animals,
                    and understand the delicate balance of our ecosystems.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  {activity2Image && (
                    <div className="h-48 relative mb-4 rounded-t-lg overflow-hidden">
                      <Image
                        src={activity2Image.imageUrl}
                        alt="Tree Planting"
                        fill
                        className="object-cover"
                        data-ai-hint={activity2Image.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="flex items-center gap-2">
                    <Sprout /> Tree Planting Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get your hands dirty and make a real difference by planting
                    native trees that will help restore local habitats.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  {activity3Image && (
                    <div className="h-48 relative mb-4 rounded-t-lg overflow-hidden">
                      <Image
                        src={activity3Image.imageUrl}
                        alt="Coastal Cleanup"
                        fill
                        className="object-cover"
                        data-ai-hint={activity3Image.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="flex items-center gap-2">
                    <Wind /> Coastal Cleanups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join us at the beach to protect marine life by removing
                    harmful plastics and waste from our beautiful coastlines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold">Ready for an Adventure?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Sign up for our newsletter to get updates on upcoming events, or
              reach out to learn more about volunteering with us!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
