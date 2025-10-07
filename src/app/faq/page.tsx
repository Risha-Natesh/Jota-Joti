
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    { 
        q: "What is JOTA-JOTI?", 
        a: "Jamboree-on-the-Air and Jamboree-on-the-Internet (JOTA-JOTI) is an annual digital and amateur radio event that connects Scouts from all over the world. It’s a unique opportunity to foster friendship, promote global citizenship, and develop essential 21st-century skills." 
    },
    { 
        q: "When does JOTA-JOTI take place?", 
        a: "The event is scheduled for the 17th, 18th, and 19th of October 2025." 
    },
    { 
        q: "How to register for JOTA-JOTI?", 
        a: "You can register for the event by visiting our registration page and filling out the appropriate Google Form. The deadline for registration is 30th September 2025."
    },
    { 
        q: "What are some of the activities in JOTA-JOTI?", 
        a: "We have a wide range of activities, including radio and digital communication, cultural exchanges, exciting games, and hands-on workshops. There are also competitions in Art, Science, and Scouting Skills. Check out the Activities page for more details!" 
    },
    { 
        q: "How can I safely participate in JOTA-JOTI?", 
        a: "Safety is our top priority. We will have trained first-aid personnel on-site, and all activities will be supervised by experienced adult leaders. We will adhere to all local safety guidelines to ensure a safe and enjoyable experience for everyone." 
    },
];

export default function FaqPage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Frequently Asked Questions</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                        Have questions? We've got answers. Here are some of the most common queries we receive.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left font-bold text-lg">{f.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">{f.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </main>
    );
}
