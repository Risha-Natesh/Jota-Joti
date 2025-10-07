
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Dna, Group, Rocket, Radio, Puzzle, Paintbrush, Mic, HandHelping, Code, Gamepad, Zap, Leaf, Heart, Users, Clock, MapPin, Box, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const competitions = [
    {
        icon: <Award className="w-10 h-10" />,
        title: "Art Competition",
        description: "Age-wise organized art competition. Express your creativity!",
        details: {
            date: "17-Oct-25",
            location: "Panchavati",
            locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
            duration: "2.5",
            materials: "Drawing Paper",
            ageGroups: [
                { age: "6 - 9 YRS", rules: "Medium - Crayons, Colour Pencils" },
                { age: "10 - 16 YRS", rules: "Pencils, Watercolors, Acrylics" },
                { age: "17 - 24 YRS", rules: "Pencils, Watercolors, Acrylics" },
            ]
        }
    },
    {
        icon: <Dna className="w-10 h-10" />,
        title: "Science Competition",
        description: "A test of scientific knowledge, application, and creativity.",
        details: {
            date: "17-Oct-25",
            location: "Panchavati",
            locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
            duration: "4 - 6",
            materials: "Table & Chair",
            ageGroups: [
                { age: "8 - 11 YRS", title: "Cardboard Creations", rules: "Design and build a simple machine, like a catapult or a marble run, using cardboard tubes and boxes." },
                { age: "12 - 16 YRS", title: "Art Meets Science", rules: "Create scientific models, educational kits, or art installations entirely from upcycled materials." },
            ]
        }
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Team Games",
        description: "Challenges designed to test and build teamwork.",
        details: {
            date: "17-Oct-25",
            location: "SCSG",
            locationUrl: "https://maps.app.goo.gl/LbwTZoreEqEuCNMcA",
            duration: "4 - 6",
            materials: "Game Props",
            ageGroups: [
                { age: "12 - 16 YRS", rules: "Requires a team of 10." },
                { age: "17 - 24 YRS", rules: "Requires a team of 10." },
            ]
        }
    },
    {
        icon: <Rocket className="w-10 h-10" />,
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center mb-10">Competitions</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    {competitions.map((comp, i) => (
                        <Card key={i} className="flex flex-col">
                            <CardHeader className="text-center">
                                <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-3 text-primary">{comp.icon}</div>
                                <CardTitle className="font-headline text-2xl">{comp.title}</CardTitle>
                                <CardDescription>{comp.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {comp.details ? (
                                    <div className="space-y-4">
                                        {comp.details.date && (
                                             <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                                                <Badge variant="outline">{comp.details.date}</Badge>
                                                {comp.details.locationUrl ? (
                                                    <a href={comp.details.locationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MapPin size={14}/> {comp.details.location} <ArrowRight size={12} /></a>
                                                ) : (
                                                    <div className="flex items-center gap-2"><MapPin size={14}/> {comp.details.location}</div>
                                                )}
                                                <div className="flex items-center gap-2"><Clock size={14}/> {comp.details.duration}</div>
                                             </div>
                                        )}
                                        {comp.details.ageGroups ? (
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[120px]">Age</TableHead>
                                                    <TableHead>Description / Rules</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {comp.details.ageGroups?.map((ag, j) => (
                                                    <TableRow key={j}>
                                                        <TableCell className="font-medium">{ag.age}</TableCell>
                                                        <TableCell>
                                                            {ag.title && <p className="font-bold">{ag.title}</p>}
                                                            <p className="text-muted-foreground">{ag.rules}</p>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        ) : null}
                                         <div className="text-xs text-muted-foreground flex items-center gap-4 justify-center pt-2">
                                            {comp.details.materials && <div className="flex items-center gap-2"><Box size={14}/> Materials Provided: {comp.details.materials}</div>}
                                            {/* @ts-ignore */}
                                            {comp.details.fee && <Badge variant="secondary">Fee: {comp.details.fee}</Badge>}
                                        </div>
                                    </div>
                                ) : (
                                    null
                                )}
                            </CardContent>
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
