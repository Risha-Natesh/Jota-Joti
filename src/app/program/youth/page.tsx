'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  User,
  Microscope,
  Wind,
  Telescope,
} from 'lucide-react';

export default function YouthPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/kids - Copy.jpg"
            alt="Kids Environmental Program"
            fill
            className="object-cover"
            data-ai-hint="kids exploring nature"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
              Kids Environmental Program
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-4">
                Fostering a Love for Nature & Science
              </h2>
              <p className="text-lg text-foreground/80 mb-6 transition-transform duration-300 hover:scale-105">
                Our Kids Environmental Program is designed to ignite curiosity
                and passion in young minds. Through a series of engaging,
                hands-on activities, we connect children with the natural
                world, teaching them valuable skills and fostering a lifelong
                love for learning and discovery.
              </p>

              <div className="space-y-4 text-foreground/80">
                <p className="transition-transform duration-300 hover:scale-105">
                  Participants will explore local ecosystems, learn about
                  native plants and animals, and engage in fun, educational
                  experiments. Our goal is to make science and nature
                  accessible, exciting, and memorable.
                </p>
                <p className="transition-transform duration-300 hover:scale-105">
                  Join us for a journey of exploration that promises to be as
                  educational as it is fun!
                </p>
              </div>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4">
                Program Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Microscope className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">
                      Hands-On Science
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Interactive experiments and nature exploration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">
                      Age Groups
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Activities tailored for children aged 6-14.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">
                      Upcoming Events
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Weekend workshops and summer camps. Stay tuned for dates!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: '#D95E35' }}
            >
              ON-CAMPUS EXPERIENCE
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-10">
              Panchavati the residence of the first Asian Nobel Laureate for
              Science,
              <br />
              Sir CV Raman's residence.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary/20 p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wind className="w-6 h-6 text-accent" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#D95E35' }}
                  >
                    SPECTRUM JUNIOR
                  </h3>
                </div>
                <p className="font-semibold text-foreground/90">
                  (1st - 6th Grade)
                </p>
                <p className="text-foreground/80 mt-2 text-lg">
                  Mud | Mess | Marvels
                </p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Telescope className="w-6 h-6 text-accent" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#D95E35' }}
                  >
                    SPECTRUM SENIOR
                  </h3>
                </div>
                <p className="font-semibold text-foreground/90">
                  (7th - 12th Grade)
                </p>
                <p className="text-foreground/80 mt-2 text-lg">
                  Experience sustainability boot camp
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center bg-forest-gradient bg-clip-text text-transparent mb-8">
              Past Events & Gallery
            </h2>
            <div className="text-center text-foreground/70">
              <p>
                Details about past events and a gallery will be available here
                soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
