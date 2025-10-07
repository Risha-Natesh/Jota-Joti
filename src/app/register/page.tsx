
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";

const registrationForms = [
  {
    title: "Visitor / Guest Registration",
    description: "For all visitors, parents, and guests attending the event.",
    url: "https://forms.gle/v7AJ6Qsie7E18MGe9",
  },
  {
    title: "Science Competition Registration",
    description: "Sign up for the Science Competition and showcase your innovations.",
    url: "https://forms.gle/vkATpNZbME5SGSpPA",
  },
  {
    title: "Team Building Registration",
    description: "Register your patrol for the team building games and challenges.",
    url: "https://forms.gle/5XL3ADyaFtnb38m27",
  },
  {
    title: "Art & Youth Got Talent Registration",
    description: "Register for the Art Competition or to showcase your talent on stage.",
    url: "https://forms.gle/GnKCUMX9LVMWG7vN8",
  },
];

function RegistrationSection() {
  return (
    <section id="register" className="container py-12 md:py-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Registration</h1>
            <p className="text-muted-foreground md:text-xl mt-4 max-w-3xl mx-auto">
            Secure your spot for an unforgettable weekend of fun, learning, and global friendship. Please select the appropriate registration form below.
            </p>
            <p className="font-bold mt-2">Deadline: 30th September 2025.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {registrationForms.map((form) => (
                 <Card key={form.title} className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{form.title}</CardTitle>
                        <CardDescription>{form.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center">
                        <Button size="lg" asChild className="transform hover:scale-105 transition-transform w-full sm:w-auto">
                            <a href={form.url} target="_blank" rel="noopener noreferrer">Register Now <ArrowRight className="ml-2"/></a>
                        </Button>
                    </CardContent>
                </Card>
            ))}
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
