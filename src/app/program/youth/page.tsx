'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Microscope } from 'lucide-react';

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
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
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
                Our Kids Environmental Program is designed to ignite curiosity and passion in young minds. Through a series of engaging, hands-on activities, we connect children with the natural world, teaching them valuable skills and fostering a lifelong love for learning and discovery.
              </p>
              
              <div className="space-y-4 text-foreground/80">
                <p className="transition-transform duration-300 hover:scale-105">
                  Participants will explore local ecosystems, learn about native plants and animals, and engage in fun, educational experiments. Our goal is to make science and nature accessible, exciting, and memorable.
                </p>
                <p className="transition-transform duration-300 hover:scale-105">
                  Join us for a journey of exploration that promises to be as educational as it is fun!
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Microscope className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Hands-On Science</h4>
                    <p className="text-sm text-foreground/70">Interactive experiments and nature exploration.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Age Groups</h4>
                    <p className="text-sm text-foreground/70">Activities tailored for children aged 6-14.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Upcoming Events</h4>
                    <p className="text-sm text-foreground/70">Weekend workshops and summer camps. Stay tuned for dates!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center bg-forest-gradient bg-clip-text text-transparent mb-8">Past Events & Gallery</h2>
            <div className="text-center text-foreground/70">
              <p>Details about past events and a gallery will be available here soon.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
