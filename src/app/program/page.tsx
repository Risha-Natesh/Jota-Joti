'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProgramPage() {
  const approachImage = PlaceHolderImages.find((img) => img.id === 'approach');
  const ecoConnectImage = PlaceHolderImages.find(
    (img) => img.id === 'eco-connect'
  );
  const engagingActivitiesImage = PlaceHolderImages.find(
    (img) => img.id === 'engaging-activities'
  );

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

        <section id="eco-connect" className="py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-forest-gradient bg-clip-text text-transparent">
                The Eco Connect Program
              </h2>
            </div>
            <div className="relative grid grid-cols-1 justify-items-center">
              <div className="absolute inset-0">
                {engagingActivitiesImage && (
                  <Image
                    src={engagingActivitiesImage.imageUrl}
                    alt={engagingActivitiesImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={engagingActivitiesImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="relative z-10 max-w-2xl w-full">
                <Card className="bg-transparent border-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Engaging Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="text-2xl font-bold text-white/80">
                          01
                        </span>
                        <div>
                          <h4 className="font-bold">HAM Radio Exploration</h4>
                          <p className="text-white/70 text-sm">
                            Introduces communication, electronics, emergency
                            usage, and connects a global community.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl font-bold text-white/80">
                          02
                        </span>
                        <div>
                          <h4 className="font-bold">
                            Rope Work & Knots Fundamentals
                          </h4>
                          <p className="text-white/70 text-sm">
                            Teaches problem-solving, engineering thinking,
                            improvisation with practical rope skills.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl font-bold text-white/80">
                          03
                        </span>
                        <div>
                          <h4 className="font-bold">
                            Essential First Aid Training
                          </h4>
                          <p className="text-white/70 text-sm">
                            Provides vital life-saving knowledge while promoting
                            empathy and social responsibility.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl font-bold text-white/80">
                          04
                        </span>
                        <div>
                          <h4 className="font-bold">
                            Panchavati Nature Walk Experience
                          </h4>
                          <p className="text-white/70 text-sm">
                            Guided immersion in nature with flora/fauna
                            observation and eco-friendly habit discussions.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl font-bold text-white/80">
                          05
                        </span>
                        <div>
                          <h4 className="font-bold">
                            Ice Breaker Game for Teamwork
                          </h4>
                          <p className="text-white/70 text-sm">
                            Fosters teamwork, collaboration, and communication
                            through engaging group challenges.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
