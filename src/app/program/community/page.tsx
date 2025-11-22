'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Hand, Users } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="https://picsum.photos/seed/community/1200/400"
            alt="Community Volunteer Program"
            fill
            className="object-cover"
            data-ai-hint="volunteers working together"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Community Volunteer Program
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
                Be the Change in Your Community
              </h2>
              <p className="text-lg text-foreground/80 mb-6 transition-transform duration-300 hover:scale-105">
                Our Community Volunteer program is for passionate individuals who want to dedicate their time and skills to making a difference. As a volunteer, you are the heart of our mission, driving change and fostering a healthier environment for all.
              </p>
              
              <div className="space-y-4 text-foreground/80">
                <p className="transition-transform duration-300 hover:scale-105">
                  We offer a variety of volunteer roles, from assisting with kids' workshops to participating in large-scale community clean-ups and tree-planting events. No matter your skill level or availability, there's a place for you.
                </p>
                <p className="transition-transform duration-300 hover:scale-105">
                  Join our dedicated team and become a steward for our community and planet.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4">Volunteer Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Hand className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Get Involved</h4>
                    <p className="text-sm text-foreground/70">Opportunities for all ages and skill levels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Community Events</h4>
                    <p className="text-sm text-foreground/70">Join us for clean-up drives, workshops, and more.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Upcoming Opportunities</h4>
                    <p className="text-sm text-foreground/70">Check our calendar for the next volunteer event.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center bg-forest-gradient bg-clip-text text-transparent mb-8">Volunteer Stories</h2>
            <div className="text-center text-foreground/70">
              <p>Read stories from our stewards and see the impact they've made.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
