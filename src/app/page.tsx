'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Leaf,
  Target,
  Users,
  Sprout,
  HeartHandshake,
  Lightbulb,
  Globe,
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  Users2,
  Radio,
  HeartPulse,
  Mountain,
  BrainCircuit,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const challengeImage = PlaceHolderImages.find(
    (img) => img.id === 'challenge'
  );
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision');

  const solutionsAndOutcomes = [
    { icon: Users, title: 'Collaborative Ecosystem' },
    { icon: LifeBuoy, title: 'Capacity Building' },
    { icon: Globe, title: 'Resource Mobilization' },
    { icon: HeartHandshake, title: 'Community Engagement' },
    { icon: Lightbulb, title: 'Innovation Incubation' },
    { icon: Target, title: 'STEM Skills Development' },
    { icon: Leaf, title: 'Environmental Awareness' },
    { icon: Users2, title: 'Teamwork & Collaboration' },
    { icon: Radio, title: 'Effective Communication' },
    { icon: BrainCircuit, title: 'Problem-Solving & Critical Thinking' },
    { icon: HeartPulse, title: 'Empathy & Compassion' },
    { icon: Mountain, title: 'Leadership & Initiative' },
    { icon: Sprout, title: 'Adaptability & Time Management' },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-screen overflow-hidden">
          <video
            src="/videos/hero-background.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white relative z-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                <span className="bg-forest-gradient bg-clip-text text-transparent">
                  Empowering
                  <br />
                  Through Nature
                </span>
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Prakruthi Shaale, a flagship initiative by Outdoor Dynamix,
                revolutionizes education by connecting minds with nature through
                innovative outdoor learning experiences. It fosters creativity,
                curiosity, and critical thinking, promoting holistic
                development.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary/30">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="h-96 relative rounded-lg overflow-hidden shadow-lg">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                About Us
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                    Innovative Outdoor Learning Center
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Dedicated to revolutionizing education by providing unique
                    outdoor learning experiences that inspire.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                    Nature Connection Benefits
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Connects everyone with nature to foster creativity,
                    curiosity, and critical thinking skills in a natural
                    environment.
                    '
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                    Promoting Holistic Development
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Focuses on nurturing responsible and compassionate
                    individuals through immersive outdoor educational programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-forest-gradient bg-clip-text text-transparent">
              Our Vision &amp; Mission
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
              Connecting changemakers to make sustainability actionable and
              inclusive.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-4">
                  Our Vision
                </h3>
                <p className="text-foreground/80">
                  Think Global, Act Local approach Connecting individuals,
                  organizations, and youth. Building a network of
                  changemakers. Sustainable future through online and offline
                  engagements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-4">
                  Our Mission
                </h3>
                <p className="text-foreground/80">
                  Make sustainability accessible and actionable for all. Bridge
                  knowledge gaps in sustainability. Mobilize volunteers and
                  resources effectively. Foster collaborative action for impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="py-20 relative text-white">
          {challengeImage && (
            <Image
              src={challengeImage.imageUrl}
              alt={challengeImage.description}
              fill
              className="object-cover"
              data-ai-hint={challengeImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                The Challenge &amp; The Opportunity
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Addressing urgent environmental threats by uniting stakeholders
                and empowering youth to foster sustainable development and
                social innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 bg-forest-gradient bg-clip-text text-transparent">
                    The Challenge
                  </h3>
                  <ul className="space-y-2 text-white/80 list-disc list-inside text-left">
                    <li>Urgent environmental threats</li>
                    <li>Disconnected sustainability efforts</li>
                    <li>Inefficient resource allocation</li>
                    <li>Limited community engagement</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 bg-forest-gradient bg-clip-text text-transparent">
                    The Opportunity
                  </h3>
                  <ul className="space-y-2 text-white/80 list-disc list-inside text-left">
                    <li>Create a collaborative ecosystem</li>
                    <li>Leverage partnerships for impact</li>
                    <li>Mobilize resources efficiently</li>
                    <li>Empower community-led innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-4">
              Our Solutions & Outcomes
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
              A pioneering enterprise fostering sustainability and community
              impact through a multi-faceted approach.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {solutionsAndOutcomes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-forest-gradient text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Shape a Sustainable Tomorrow Together
            </h2>
            <p className="text-lg max-w-4xl mx-auto mb-8 text-primary-foreground/90">
              Discover our groundbreaking initiative uniting Nobel Laureate Sir
              CV Raman Trust &amp; Outdoor Dynamix. Join us to empower minds
              through extraordinary learning experiences, complement academic
              education with hands-on activities, and inspire a lifelong love
              for nature. Partner with Prakruthi Shaale to nurture curious,
              compassionate, and responsible future leaders who will shape a
              sustainable tomorrow.
            </p>
            <div className="mt-12">
              <div className="max-w-4xl mx-auto bg-background/90 text-foreground rounded-lg p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold bg-forest-gradient bg-clip-text text-transparent mb-6">
                      Contact Us
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <a
                          href="tel:+919886633810"
                          className="hover:text-accent"
                        >
                          +91 9886633810
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-accent" />
                        <a
                          href="mailto:krishnaraj@prakruthishaale.com"
                          className="hover:text-accent"
                        >
                          krishnaraj@prakruthishaale.com
                        </a>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-accent mt-1" />
                        <span>
                          45, 15th Cross Rd, Maruthi Extension, Malleshwaram,
                          Bengaluru, Karnataka 560003
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
