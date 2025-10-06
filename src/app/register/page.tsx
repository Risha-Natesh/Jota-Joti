
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";

function RegistrationSection() {
  return (
    <section id="register" className="container py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Registration</h1>
                <p className="text-muted-foreground md:text-xl mt-4 max-w-lg">
                Secure your spot for an unforgettable weekend of fun, learning, and global friendship. Registration is now open for Participants, Volunteers, and Parents.
                </p>
                <p className="font-bold mt-2">Deadline: 30th September 2025.</p>
            </div>
            <Card className="h-full flex flex-col bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Join the Adventure!</CardTitle>
                    <CardDescription className="text-primary-foreground/80">Click the button below to open the registration form.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                    <Button size="lg" variant="secondary" asChild className="transform hover:scale-105 transition-transform">
                        <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">Register via Google Forms <ArrowRight className="ml-2"/></a>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}

function DownloadsSection() {
    const downloads = [
      { name: "Event Brochure", file: "#" },
      { name: "Schedule PDF", file: "#" },
      { name: "Parental Consent Form", file: "#" },
    ];
    return (
        <section id="downloads" className="bg-muted py-12 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Downloadables</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                        Get all the information you need right here. Download our brochure, schedule, and other important documents.
                    </p>
                </div>
                <div className="max-w-xl mx-auto mt-8">
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
      <RegistrationSection />
      <DownloadsSection />
    </main>
  );
}
