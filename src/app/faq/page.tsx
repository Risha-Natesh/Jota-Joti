
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    { q: "Who can participate?", a: "The event is open to all members of the Scout and Guide movements, as well as students and parents interested in the program. No prior experience is required!" },
    { q: "Is there an age limit?", a: "While JOTA-JOTI is for all ages, certain workshops may have age recommendations. Generally, participants aged 10 and above will get the most out of the activities." },
    { q: "What should I bring?", a: "A detailed list will be sent to registered participants. Essentials include comfortable clothing, a water bottle, a notebook, and most importantly, a curious and enthusiastic spirit!" },
    { q: "Is there a registration fee?", a: "Yes, there is a nominal fee to cover the costs of materials, food, and logistics. The exact amount is mentioned in the registration form." },
    { q: "What safety measures are in place?", a: "Safety is our top priority. We will have trained first-aid personnel on-site, and all activities will be supervised by experienced adult leaders. We will adhere to all local safety guidelines." },
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

    