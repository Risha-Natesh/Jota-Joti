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
  Radio,
  HeartPulse,
  Mountain,
  Users2,
  Phone,
  Mail,
  MapPin,
  LifeBuoy,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const heroSketch = PlaceHolderImages.find((img) => img.id === 'hero-sketch');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision');
  const challengeImage = PlaceHolderImages.find(
    (img) => img.id === 'challenge'
  );
  const approachImage = PlaceHolderImages.find((img) => img.id === 'approach');

  return (
    <div className="flex flex-col min-h-screen bg-background text-gray-800">
      <Header />
      <main className="flex-1">
        <section id="home" className="container mx-auto py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
                Empowering
                <br />
                <span className="text-accent">Young Minds</span>
                <br />
                Through Nature
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Prakruthi Shaale, a flagship initiative by Outdoor Dynamix,
                revolutionizes education by connecting students with nature
                through innovative outdoor learning experiences. It fosters
                creativity, curiosity, and critical thinking, promoting
                holistic development of young minds.
              </p>
            </div>
            <div className="h-96 lg:h-[500px] relative">
              {heroSketch && (
                <Image
                  src={heroSketch.imageUrl}
                  alt={heroSketch.description}
                  fill
                  className="object-contain"
                  data-ai-hint={heroSketch.imageHint}
                />
              )}
            </div>
          </div>
          <div className="mt-16 pt-4 border-t border-border flex justify-end">
            <p className="text-sm text-gray-500">
              Powered By:{' '}
              <a href="#" className="font-semibold text-primary hover:underline">
                Outdoor Dynamix
              </a>
            </p>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
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
                  <h3 className="text-xl font-bold text-primary">
                    Innovative Outdoor Learning Center
                  </h3>
                  <p className="text-gray-600 mt-1">
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
                  <h3 className="text-xl font-bold text-primary">
                    Nature Connection Benefits
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Connects students with nature to foster creativity,
                    curiosity, and critical thinking skills in a natural
                    environment.
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
                  <h3 className="text-xl font-bold text-primary">
                    Promoting Holistic Development
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Focuses on nurturing responsible and compassionate
                    individuals through immersive outdoor educational programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Connecting changemakers to make sustainability actionable and
              inclusive.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left p-8 rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  Think Global, Act Local approach Connecting individuals,
                  organizations, and youth. Building a network of
                  changemakers. Sustainable future through online and offline
                  engagements.
                </p>
              </div>
              <div className="text-left p-8 rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Make sustainability accessible and actionable for all. Bridge
                  knowledge gaps in sustainability. Mobilize volunteers and
                  resources effectively. Foster collaborative action for impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="py-20 bg-gray-50">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-primary">
                The Challenge & The Opportunity
              </h2>
              <p className="text-gray-600">
                Addressing urgent environmental threats by uniting stakeholders
                and empowering youth to foster sustainable development and
                social innovation through SDG 17 partnerships.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3">
                    The Challenge We Address
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">1.</span>
                      Environmental Threats: Urgent need to prepare young minds
                      for sustainability.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">2.</span>
                      Disconnected Initiatives: Fragmented stakeholder efforts
                      limiting impact.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">3.</span>
                      Resource Allocation: Inefficient use of resources for
                      sustainable projects.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">4.</span>
                      Limited Community Engagement: Low involvement slows
                      sustainable progress.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3">
                    The Opportunity We Seize
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">1.</span>
                      Create a collaborative ecosystem to unite diverse
                      stakeholders.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">2.</span>
                      Leverage SDG 17 Partnerships to amplify collective impact.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">3.</span>
                      Mobilize resources efficiently to maximize sustainability
                      efforts.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-accent mr-2">4.</span>
                      Empower communities to innovate and drive sustainable
                      change.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-96 relative rounded-lg overflow-hidden shadow-lg">
              {challengeImage && (
                <Image
                  src={challengeImage.imageUrl}
                  alt={challengeImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={challengeImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="solution" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Solution: Prakruthi Shaale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              A pioneering enterprise fostering sustainability and community
              impact through a multi-faceted approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Collaborative Ecosystem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connects individuals, organizations, and communities for
                    collective action.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <LifeBuoy className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Capacity Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enhances skills and knowledge for effective partnerships and
                    development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Resource Mobilization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Facilitates access to expertise, funding, and critical
                    resources efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <HeartHandshake className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Community Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Empowers local communities to actively participate in
                    sustainable initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Innovation Incubation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fosters social entrepreneurship to drive innovative
                    sustainability solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary">
                Our Approach & Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
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
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Outdoor Activities & Workshops
                  </h3>
                  <p className="text-gray-600">
                    Activities like nature walks, bird watching, and gardening
                    promote environmental awareness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Experiential Learning Programs
                  </h3>
                  <p className="text-gray-600">
                    Hands-on activities enrich curriculum and support academic,
                    emotional, and social growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Volunteering, Team-building & Leadership Programs
                  </h3>
                  <p className="text-gray-600">
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
              <h2 className="text-4xl font-bold text-primary">
                The Eco Connect Program
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                A transformative youth initiative that cultivates innovators and
                eco-conscious leaders for future challenges.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-primary">
                  Empowering Youth for a Sustainable Future
                </h3>
                <p className="text-gray-600">
                  Responds to current needs by empowering youth with knowledge,
                  practical skills, and awareness. Our program is aligned with
                  UN SDGs, focusing on sustainability, climate action, and
                  responsible consumption.
                </p>
                <ul className="space-y-3 text-gray-600">
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
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Engaging Activities
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        HAM Radio Exploration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Introduces communication, electronics, emergency usage,
                        and connects a global community.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Rope Work & Knots Fundamentals
                      </h4>
                      <p className="text-sm text-gray-600">
                        Teaches problem-solving, engineering thinking,
                        improvisation with practical rope skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Essential First Aid Training
                      </h4>
                      <p className="text-sm text-gray-600">
                        Provides vital life-saving knowledge while promoting
                        empathy and social responsibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      04
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Panchavati Nature Walk Experience
                      </h4>
                      <p className="text-sm text-gray-600">
                        Guided immersion in nature with flora/fauna observation
                        and eco-friendly habit discussions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      05
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Ice Breaker Game for Teamwork
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fosters teamwork, collaboration, and communication
                        through engaging group challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Core Outcomes & Life Skills Development
              </h3>
              <p className="text-gray-600 max-w-4xl mx-auto mb-10">
                Our programs empower students with essential STEM skills,
                environmental awareness, and crucial life skills that promote
                personal growth and social responsibility.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    STEM Skills Development
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Environmental Awareness
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users2 className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Teamwork & Collaboration
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Radio className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Effective Communication
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Problem-Solving & Critical Thinking
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Empathy & Compassion
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Mountain className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Leadership & Initiative
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-center">
                    Adaptability & Time Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Shape a Sustainable Tomorrow Together
            </h2>
            <p className="text-lg max-w-4xl mx-auto mb-8 text-primary-foreground/90">
              Discover our groundbreaking initiative uniting Nobel Laureate Sir
              CV Raman Trust & Outdoor Dynamix. Join us to empower students
              through extraordinary learning experiences, complement academic
              education with hands-on activities, and inspire a lifelong love
              for nature. Partner with Prakruthi Shaale to nurture curious,
              compassionate, and responsible future leaders who will shape a
              sustainable tomorrow.
            </p>
            <div className="mt-12">
              <div className="max-w-4xl mx-auto bg-background/90 text-gray-800 rounded-lg p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-primary mb-6">
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
                      <div className="flex items-center gap-4">
                        <Globe className="w-5 h-5 text-accent" />
                        <a
                          href="http://www.prakruthishaale.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          www.prakruthishaale.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-primary">
                      Krishna Raj S
                    </h4>
                    <p className="text-gray-600 mb-4">Founder</p>
                    <p className="text-sm text-gray-500">
                      Powered By: Outdoor Dynamix
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
