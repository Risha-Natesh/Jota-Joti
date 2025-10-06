import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Dna, Group, Rocket, Radio, Puzzle, Paintbrush, Mic, HandHelping, Code, Gamepad, Zap, Leaf, Heart } from "lucide-react";

const competitions = [
    {
        icon: <Award className="w-8 h-8" />,
        title: "Art Competition",
        description: "Age-wise organized art competition. Participation is free!",
        badge: "Free"
    },
    {
        icon: <Dna className="w-8 h-8" />,
        title: "Science Competition",
        description: "Compete in teams of 4. A test of scientific knowledge and application.",
        badge: "Fee: INR 200"
    },
    {
        icon: <Group className="w-8 h-8" />,
        title: "Team Building",
        description: "Challenges designed to test and build teamwork. Form a team of 10.",
        badge: "Fee: INR 500"
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Scouting Skills",
        description: "A competition to showcase your core scouting knowledge and skills."
    }
];

const activityCategories = [
    {
        category: "Exhibitions & Demos",
        items: [
            { icon: <Radio className="w-6 h-6" />, title: "HAM Radio", description: "See amateur radio in action." },
            { icon: <Puzzle className="w-6 h-6" />, title: "ISPF", description: "Interactive science and tech demos." },
            { icon: <Gamepad className="w-6 h-6" />, title: "Fox Hunt", description: "A radio direction-finding game." },
            { icon: <Code className="w-6 h-6" />, title: "Arduino Coding", description: "Explore the world of microcontrollers." },
            { icon: <Radio className="w-6 h-6" />, title: "Satellite Communication", description: "Learn how we talk to satellites." },
            { icon: <Zap className="w-6 h-6" />, title: "Sprint Timing Dash", description: "High-speed timing technology." },
        ]
    },
    {
        category: "Workshops",
        items: [
            { icon: <Heart className="w-6 h-6" />, title: "Crochet", description: "Learn the basics of crochet." },
            { icon: <Paintbrush className="w-6 h-6" />, title: "Eco Painting", description: "Create art with natural materials." },
            { icon: <Mic className="w-6 h-6" />, title: "Poetry", description: "Express yourself through words." },
            { icon: <Leaf className="w-6 h-6" />, title: "Eco Connect", description: "Workshop on environmental awareness." },
        ]
    },
    {
        category: "On The Spot Gadgets",
        items: [
            { icon: <Zap className="w-6 h-6" />, title: "Morse Code Oscillator", description: "Build your own Morse code device." },
            { icon: <Puzzle className="w-6 h-6" />, title: "ISPF Kits", description: "Hands-on science kits to assemble." },
        ]
    },
    {
        category: "Stage",
        items: [
            { icon: <Mic className="w-6 h-6" />, title: "Music Jam", description: "Open stage for musical performances." },
            { icon: <Award className="w-6 h-6" />, title: "Youth Got Talent", description: "Showcase your unique talents." },
        ]
    },
    {
        category: "Community Volunteering",
        items: [
            { icon: <HandHelping className="w-6 h-6" />, title: "Paper Bag Making - Ecofold", description: "Contribute to a greener planet." },
            { icon: <HandHelping className="w-6 h-6" />, title: "Community Development", description: "Activities with SCSG, Panchavati, & Prakruthi Shaale." },
            { icon: <Paintbrush className="w-6 h-6" />, title: "Community Art Creation", description: "Collaborate on a large art piece." },
        ]
    },
];

export default function ActivitiesPage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Activities & Competitions</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Explore the wide range of exciting activities and fierce competitions we have lined up for you at JOTA-JOTI 2025.
                </p>
            </div>

            <section id="competitions" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center mb-8">Competitions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {competitions.map((comp, i) => (
                        <Card key={i} className="flex flex-col">
                            <CardHeader className="items-center text-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2 text-primary">{comp.icon}</div>
                                <CardTitle className="font-headline">{comp.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center flex-grow">
                                <p className="text-muted-foreground">{comp.description}</p>
                            </CardContent>
                            {comp.badge && <div className="p-4 pt-0 text-center"><Badge variant="secondary">{comp.badge}</Badge></div>}
                        </Card>
                    ))}
                </div>
            </section>

            <section id="activities">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center mb-12">Activities</h2>
                <div className="space-y-12">
                    {activityCategories.map((cat, i) => (
                        <div key={i}>
                            <h3 className="text-2xl font-bold font-headline mb-6">{cat.category}</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.items.map((item, j) => (
                                    <Card key={j}>
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="text-primary mt-1">{item.icon}</div>
                                            <div>
                                                <h4 className="font-bold">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}