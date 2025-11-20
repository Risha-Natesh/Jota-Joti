'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Leaf,
  Target,
  Sprout,
  Lightbulb,
  Radio,
  HeartPulse,
  Mountain,
  Users2,
} from 'lucide-react';

export default function ProgramPage() {
  const approachImage = PlaceHolderImages.find((img) => img.id === 'approach');
  const engagingActivitiesImage = PlaceHolderImages.find(
    (img) => img.id === 'engaging-activities'
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
       <div className="absolute top-0 left-0 -z-10 opacity-10">
        <svg
          width="300"
          height="300"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(var(--primary))"
            d="M399.5,420.5Q373,341,438,300Q503,259,451,192.5Q399,126,358.5,102.5Q318,79,250,71.5Q182,64,136.5,105Q91,146,67.5,202Q44,258,94,307.5Q144,357,197,378.5Q250,400,324.5,410Q399,420,399.5,420.5Z"
            transform="translate(-50 -50)"
          />
          <path
            fill="hsl(var(--accent))"
            d="M110.3,5.1c32.4,0.3,65,13.8,88.4,36.9c23.4,23.1,37.6,56.3,37.6,90.3c0,29.9-10.4,59.1-31,81.1c-20.6,22-51.5,36.8-82.7,42.3c-31.2,5.5-62.8-0.3-90.1-16.1C35.2,223.8,12,197,3.9,165.7C-4.1,134.4-7,98.8,3.9,68.8c10.9-30,34.7-55.7,63.1-66.9C95.4,-8.3,110.3,5.1,110.3,5.1z"
            transform="translate(150 50) scale(0.8)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-10 overflow-hidden">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(var(--accent))"
            d="M48.8,-58.2C62.8,-49.1,73.4,-33.7,76.5,-16.4C79.6,0.8,75.2,19.8,65.3,35.2C55.4,50.6,40.1,62.4,23.5,68.2C6.9,74,-11,73.8,-27.2,68.2C-43.4,62.6,-57.9,51.6,-66.2,37.3C-74.4,23,-76.4,5.4,-72.5,-10.6C-68.6,-26.6,-58.8,-41,-46.3,-50.2C-33.8,-59.4,-18.6,-63.5,-3.5,-62C11.6,-60.5,23.1,-53.4,34.8,-47.5C46.5,-41.6,48.8,-58.2,48.8,-58.2Z"
            transform="translate(150 140) scale(1.8)"
          />
        </svg>
      </div>
      <Header />
      <main className="flex-1">
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
                    leadership skills among students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="eco-connect" className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                The Eco Connect Program
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                A transformative youth initiative that cultivates innovators and
                eco-conscious leaders for future challenges.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                  Empowering Youth for a Sustainable Future
                </h3>
                <p className="text-foreground/80">
                  Responds to current needs by empowering youth with knowledge,
                  practical skills, and awareness. Our program is aligned with
                  UN SDGs, focusing on sustainability, climate action, and
                  responsible consumption.
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-accent" />
                    <span>Immersive Learning Environment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-accent" />
                    <span>STEM & Environmental Integration</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 py-12 rounded-lg bg-secondary/30">
                <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-6 text-center">
                  Engaging Activities
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        HAM Radio Exploration
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Introduces communication, electronics, emergency usage,
                        and connects a global community.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Rope Work & Knots Fundamentals
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Teaches problem-solving, engineering thinking,
                        improvisation with practical rope skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Essential First Aid Training
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Provides vital life-saving knowledge while promoting
                        empathy and social responsibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      04
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Panchavati Nature Walk Experience
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Guided immersion in nature with flora/fauna observation
                        and eco-friendly habit discussions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      05
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Ice Breaker Game for Teamwork
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Fosters teamwork, collaboration, and communication
                        through engaging group challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-6">
                Core Outcomes & Life Skills Development
              </h3>
              <p className="text-foreground/80 max-w-4xl mx-auto mb-10">
                Our programs empower students with essential STEM skills,
                environmental awareness, and crucial life skills that promote
                personal growth and social responsibility.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Target className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    STEM Skills Development
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Environmental Awareness
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users2 className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Teamwork & Collaboration
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Radio className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Effective Communication
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Problem-Solving & Critical Thinking
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Empathy & Compassion
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Mountain className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Leadership & Initiative
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    Adaptability & Time Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
