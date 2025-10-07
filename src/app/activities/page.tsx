
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
            time: "11:00 AM - 12:00 PM",
            location: "Panchavati",
            locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
            materials: "Drawing Paper",
            ageGroups: [
                { age: "6 - 9 YRS", title: "Crayons & Colour Pencils", rules: "Unleash your imagination using crayons and colour pencils to create vibrant masterpieces." },
                { age: "10 - 16 YRS", title: "Pencils, Watercolors, Acrylics", rules: "Explore advanced techniques with a wider range of mediums to bring your artistic vision to life." },
                { age: "17 - 24 YRS", title: "Pencils, Watercolors, Acrylics", rules: "Showcase your expertise and creativity using professional-grade materials in this competitive category." },
            ]
        }
    },
    {
        icon: <Dna className="w-10 h-10" />,
        title: "Science Competition",
        description: "A test of scientific knowledge, application, and creativity.",
        details: {
            date: "17-Oct-25",
            time: "11:00 AM - 12:00 PM",
            location: "Panchavati",
            locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
            materials: "Table & Chair",
            ageGroups: [
                { age: "8 - 11 YRS", title: "Cardboard Creations", rules: "Design and build a simple machine, like a catapult or a marble run, using cardboard tubes and boxes." },
                { age: "12 - 16 YRS", title: "Art Meets Science", rules: "Create scientific models, educational kits, or art installations entirely from upcycled materials." },
                { age: "17 - 24 YRS", title: "E-Waste to E-Wonder", rules: "Give electronic waste a second life through science and creativity." },
            ]
        }
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Team Games",
        description: "Challenges designed to test and build teamwork.",
        details: {
            date: "17-Oct-25",
            time: "11:00 AM - 12:00 PM",
            location: "SCSG",
            locationUrl: "https://maps.app.goo.gl/LbwTZoreEqEuCNMcA",
            materials: "Game Props",
            ageGroups: [
                { age: "12 - 16 YRS", title: "Patrol Team Challenge", rules: "Assemble your patrol of 10 for an exciting series of team-building challenges." },
                { age: "17 - 24 YRS", title: "Senior Team Challenge", rules: "Form a team of 10 and compete in advanced challenges designed to test your leadership and collaboration skills." },
            ]
        }
    },
    {
        icon: <Rocket className="w-10 h-10" />,
        title: "Scouting Skills",
        description: "A competition to showcase your core scouting knowledge and skills.",
        details: {
            date: "18-Oct-25",
            time: "10:00 AM - 12:00 PM",
            location: "SCSG",
            locationUrl: "https://maps.app.goo.gl/LbwTZoreEqEuCNMcA",
            rules: [
                "Shelter Preparation",
                "Knots Relay",
                "Estimation",
                "First Aid"
            ]
        }
    },
    {
        icon: <Mic className="w-10 h-10" />,
        title: "Youth Got Talent",
        description: "Showcase your unique talents on the big stage.",
        details: {
            date: "18-Oct-25",
            time: "03:00 PM - 05:00 PM",
            location: "Panchavati",
            locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
        }
    }
];

const activityCategories = [
    {
        category: "Exhibitions & Demos",
        items: [
            { icon: <Radio className="w-6 h-6" />, title: "HAM Radio", description: "See amateur radio in action.", date: "18-Oct-25", time: "All Day" },
            { icon: <Puzzle className="w-6 h-6" />, title: "ISPF", description: "Interactive science and tech demos.", date: "18-Oct-25", time: "All Day" },
            { icon: <Gamepad className="w-6 h-6" />, title: "Fox Hunt", description: "A radio direction-finding game.", date: "18-Oct-25", time: "All Day" },
            { icon: <Code className="w-6 h-6" />, title: "Arduino Coding", description: "Explore the world of microcontrollers.", date: "18-Oct-25", time: "All Day" },
            { icon: <Radio className="w-6 h-6" />, title: "Satellite Communication", description: "Learn how we talk to satellites.", date: "18-Oct-25", time: "All Day" },
            { icon: <Zap className="w-6 h-6" />, title: "Sprint Timing Dash", description: "High-speed timing technology.", date: "18-Oct-25", time: "All Day" },
        ]
    },
    {
        category: "Workshops",
        items: [
            { icon: <Heart className="w-6 h-6" />, title: "Crochet", description: "Learn the basics of crochet.", date: "18-Oct-25", time: "All Day" },
            { icon: <Paintbrush className="w-6 h-6" />, title: "Eco Painting", description: "Create art with natural materials.", date: "18-Oct-25", time: "All Day" },
            { icon: <Mic className="w-6 h-6" />, title: "Poetry", description: "Express yourself through words.", date: "18-Oct-25", time: "All Day" },
            { icon: <Leaf className="w-6 h-6" />, title: "Eco Connect", description: "Workshop on environmental awareness.", date: "18-Oct-25", time: "All Day" },
        ]
    },
    {
        category: "DIY Booths",
        items: [
            { icon: <Zap className="w-6 h-6" />, title: "Morse Code Oscillator", description: "Build your own Morse code device.", date: "18-Oct-25", time: "All Day" },
            { icon: <Puzzle className="w-6 h-6" />, title: "ISPF Kits", description: "Hands-on science kits to assemble.", date: "18-Oct-25", time: "All Day" },
        ]
    },
    {
        category: "Stage",
        items: [
            { icon: <Mic className="w-6 h-6" />, title: "Music Jam", description: "Open stage for musical performances.", date: "18-Oct-25", time: "All Day" },
        ]
    },
    {
        category: "Community Volunteering",
        items: [
            { icon: <HandHelping className="w-6 h-6" />, title: "Paper Bag Making - Ecofold", description: "Contribute to a greener planet.", date: "17-Oct to 19-Oct", time: "All Day" },
            { icon: <HandHelping className="w-6 h-6" />, title: "Community Development", description: "Activities with SCSG, Panchavati, & Prakruthi Shaale.", date: "17-Oct to 19-Oct", time: "All Day" },
            { icon: <Paintbrush className="w-6 h-6" />, title: "Community Art Creation", description: "Collaborate on a large art piece.", date: "19-Oct-25", time: "10:00 AM - 01:00 PM" },
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
                                        {(comp.details.date || comp.details.time) && (
                                             <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                                                {comp.details.date && <Badge variant="outline">{comp.details.date}</Badge>}
                                                {comp.details.time && <div className="flex items-center gap-2"><Clock size={14}/> {comp.details.time}</div>}
                                             </div>
                                        )}
                                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                                            {comp.details.locationUrl ? (
                                                <a href={comp.details.locationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MapPin size={14}/> {comp.details.location} <ArrowRight size={12} /></a>
                                            ) : (
                                                comp.details.location && <div className="flex items-center gap-2"><MapPin size={14}/> {comp.details.location}</div>
                                            )}
                                        </div>
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
                                         {comp.details.rules && Array.isArray(comp.details.rules) && (
                                            <ul className="list-disc list-inside text-left text-muted-foreground space-y-1 p-4 bg-muted/50 rounded-md">
                                                {comp.details.rules.map((rule, k) => (
                                                    <li key={k}>{rule}</li>
                                                ))}
                                            </ul>
                                        )}
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
                                        <CardContent className="p-6 flex flex-col gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="text-primary mt-1">{item.icon}</div>
                                                <div>
                                                    <h4 className="font-bold">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>
                                            {(item.date || item.time) && (
                                                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                                                    {item.date && <Badge variant="outline">{item.date}</Badge>}
                                                    {item.time && <div className="flex items-center gap-2"><Clock size={14}/> {item.time}</div>}
                                                </div>
                                            )}
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
