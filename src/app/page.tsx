'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, Milestone, Target } from 'lucide-react';

export default function Home() {
  const heroSketch = PlaceHolderImages.find((img) => img.id === 'hero-sketch');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');

  return (
    <div className="flex flex-col min-h-screen bg-background text-gray-800">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="container mx-auto py-20 lg:py-32"
        >
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
                Powered By: <a href="#" className="font-semibold text-primary hover:underline">Outdoor Dynamix</a>
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
                   <h3 className="text-xl font-bold text-primary">Innovative Outdoor Learning Center</h3>
                   <p className="text-gray-600 mt-1">Dedicated to revolutionizing education by providing unique outdoor learning experiences that inspire.</p>
                 </div>
               </div>
                <div className="flex gap-4">
                 <div className="flex-shrink-0">
                   <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-accent" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-primary">Nature Connection Benefits</h3>
                   <p className="text-gray-600 mt-1">Connects students with nature to foster creativity, curiosity, and critical thinking skills in a natural environment.</p>
                 </div>
               </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
