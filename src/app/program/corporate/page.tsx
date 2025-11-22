'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Briefcase, Zap } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="https://picsum.photos/seed/corporate/1200/400"
            alt="Corporate Partnership Program"
            fill
            className="object-cover"
            data-ai-hint="corporate team outdoors"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Corporate Partnership Program
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
                Strategic Environmental Alliances
              </h2>
              <p className="text-lg text-foreground/80 mb-6 transition-transform duration-300 hover:scale-105">
                Our Corporate Partnership initiative offers unique opportunities for companies to engage in meaningful environmental action and team-building. Partner with us to create customized programs that align with your company's values and CSR goals.
              </p>
              
              <div className="space-y-4 text-foreground/80">
                <p className="transition-transform duration-300 hover:scale-105">
                  From employee volunteering days to co-hosted community events, we provide a platform for your team to connect, collaborate, and contribute to a sustainable future. Enhance your corporate identity while making a real-world impact.
                </p>
                <p className="transition-transform duration-300 hover:scale-105">
                  Let's work together to build a greener tomorrow.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4">Partnership Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Customized Programs</h4>
                    <p className="text-sm text-foreground/70">Tailored events to meet your team's objectives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Impactful Team-Building</h4>
                    <p className="text-sm text-foreground/70">Boost morale and collaboration through shared purpose.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-transform duration-300 hover:scale-105">Event Scheduling</h4>
                    <p className="text-sm text-foreground/70">Flexible scheduling for single-day or ongoing projects.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center bg-forest-gradient bg-clip-text text-transparent mb-8">Our Corporate Partners</h2>
            <div className="text-center text-foreground/70">
              <p>Details about past partnerships and testimonials will be available here soon.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
