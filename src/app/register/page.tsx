
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";

function DownloadsAndRegisterSection() {
    const downloads = [
      { name: "Event Brochure", file: "#" },
      { name: "Schedule PDF", file: "#" },
      { name: "Parental Consent Form", file: "#" },
    ];
    return (
        <section id="register" className="container py-12 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Registration & Downloads</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Join the adventure and get all the information you need.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                  <Card className="h-full flex flex-col bg-primary text-primary-foreground">
                      <CardHeader>
                          <CardTitle className="font-headline text-4xl">Join the Adventure!</CardTitle>
                          <CardDescription className="text-primary-foreground/80">Registration is now open. Secure your spot for an unforgettable weekend of fun, learning, and global friendship. Deadline: 30th September 2025.</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-center justify-center">
                          <Button size="lg" variant="secondary" asChild className="transform hover:scale-105 transition-transform">
                              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">Register via Google Forms <ArrowRight className="ml-2"/></a>
                          </Button>
                      </CardContent>
                      <div className="p-6 text-sm text-primary-foreground/80">
                          <p>Registration is open for: <strong>Participants</strong>, <strong>Volunteers</strong>, and <strong>Parents</strong>.</p>
                      </div>
                  </Card>
              </div>
              <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold font-headline">Downloadables</h3>
                  <p className="text-muted-foreground">Get all the information you need right here.</p>
                  <ul className="space-y-3">
                      {downloads.map((d, i) => (
                          <li key={i}>
                              <Button variant="outline" className="w-full justify-between" asChild>
                                  <a href={d.file} download>
                                      {d.name}
                                      <Download size={16}/>
                                  </a>
                              </Button>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>
    );
  }
  
  export default function RegisterPage() {
    return (
      <main>
        <DownloadsAndRegisterSection />
      </main>
    );
  }
