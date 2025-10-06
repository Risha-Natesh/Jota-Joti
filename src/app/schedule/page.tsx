
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Clock, MapPin, Utensils, Zap, Tent, Sunrise, Sunset, Radio, Film, Users, Award, Code, Gamepad2, ShieldCheck, Video, Sailboat, Trophy, Mic, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const schedule = {
  panchavati: {
    day1: [
      { time: "09:00 AM - 10:00 AM", event: "Registrations for Arts & Science Competitions", icon: <Zap className="w-5 h-5" /> },
      { time: "11:00 AM - 12:00 PM", event: "Science, Arts Competitions", icon: <Award className="w-5 h-5" /> },
      { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
      { time: "03:00 PM - 04:00 PM", event: "JOTA SET UP", icon: <Radio className="w-5 h-5" /> },
      { time: "06:00 PM", event: "Day 1 Wrap Up", icon: <Sunset className="w-5 h-5" /> },
    ],
    day2: [
        { time: "09:00 AM", event: "Jota Walkin starts", icon: <Sunrise className="w-5 h-5" /> },
        { time: "11:00 AM", event: "Stalls / Exhibitions / workshops etc will go Live", icon: <PartyPopper className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
        { time: "04:00 PM - 05:00 PM", event: "Youth Got Talent", icon: <Mic className="w-5 h-5" /> },
        { time: "07:00 PM", event: "Day 2 Wrap Up", icon: <Sunset className="w-5 h-5" /> },
    ],
    day3: [
        { time: "All Day", event: "Open Day", icon: <Users className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
        { time: "04:00 PM - 05:00 PM", event: "Valedictory & Closing Ceremony", icon: <Trophy className="w-5 h-5" /> },
    ]
  },
  chamundi: {
    day1: [
      { time: "09:00 AM - 10:00 AM", event: "Registrations for Team Games", icon: <Users className="w-5 h-5" /> },
      { time: "11:00 AM - 12:00 PM", event: "Team Games & Joti Set Up", icon: <Gamepad2 className="w-5 h-5" /> },
      { time: "02:00 PM - 04:00 PM", event: "JOTI Station will be live", icon: <Radio className="w-5 h-5" /> },
    ],
    day2: [
        { time: "09:00 AM - 10:00 AM", event: "Registrations for Judging Camp", icon: <Award className="w-5 h-5" /> },
        { time: "10:00 AM - 12:00 PM", event: "JOTI Station will be live Judging Camp / Community Volunteering / Gabion Wall Preparation", icon: <Radio className="w-5 h-5" /> },
        { time: "02:00 PM - 04:00 PM", event: "JOTI Station will be live", icon: <Radio className="w-5 h-5" /> },
    ],
    day3: [
        { time: "09:00 AM - 10:00 AM", event: "Open Day", icon: <Users className="w-5 h-5"/> },
        { time: "11:00 AM - 12:00 PM", event: "Community Art", icon: <Award className="w-5 h-5" /> },
        { time: "04:00 PM - 05:00 PM", event: "Validictory", icon: <Trophy className="w-5 h-5" /> },
    ]
  }
};


const ScheduleTimeline = ({ items }: { items: { time: string, event: string, icon: React.ReactNode }[] }) => (
    <div className="relative pl-8">
        <div className="absolute left-0 h-full w-px bg-border -translate-x-1/2 ml-4"></div>
        {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 mb-8 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center absolute left-0 -translate-x-1/2">
                    <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                        <div className="text-primary">{item.icon}</div>
                    </div>
                </div>
                <div className="pl-6">
                    <p className="text-sm text-muted-foreground font-medium">{item.time}</p>
                    <p className="font-semibold text-foreground">{item.event}</p>
                </div>
            </div>
        ))}
    </div>
);

const DayTabs = ({ locationSchedule }: { locationSchedule: { day1: any[], day2: any[], day3: any[] } }) => (
    <Tabs defaultValue="day1" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day1">Day 1 (Oct 17)</TabsTrigger>
            <TabsTrigger value="day2">Day 2 (Oct 18)</TabsTrigger>
            <TabsTrigger value="day3">Day 3 (Oct 19)</TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
            <Card>
                <CardContent className="pt-6">
                    <ScheduleTimeline items={locationSchedule.day1} />
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="day2">
            <Card>
                <CardContent className="pt-6">
                    <ScheduleTimeline items={locationSchedule.day2} />
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="day3">
            <Card>
                <CardContent className="pt-6">
                    <ScheduleTimeline items={locationSchedule.day3} />
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
);


export default function SchedulePage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Event Schedule</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Here’s what we have planned for JOTA-JOTI 2025. Choose a location to see the detailed schedule.
                </p>
            </div>

            <Tabs defaultValue="panchavati" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="panchavati">
                        <MapPin className="mr-2 h-4 w-4"/> Panchavati
                    </TabsTrigger>
                    <TabsTrigger value="chamundi">
                        <Radio className="mr-2 h-4 w-4" /> Sri Chamundi Scout Group
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="panchavati">
                    <Card className="bg-transparent border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="font-headline">
                                <a href="https://maps.app.goo.gl/cC787aQb9vq7HybE7" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                    Panchavati (Main Hub)
                                </a>
                            </CardTitle>
                            <CardDescription>Main hub for workshops & digital activities. <a href="https://maps.app.goo.gl/cC787aQb9vq7HybE7" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold flex items-center gap-1">Get Directions <ArrowRight className="w-3 h-3"/></a></CardDescription>
                        </CardHeader>
                        <CardContent>
                           <DayTabs locationSchedule={schedule.panchavati} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="chamundi">
                    <Card className="bg-transparent border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="font-headline">Sri Chamundi Base</CardTitle>
                            <CardDescription>Base for radio communication and outdoor games. <a href="https://maps.app.goo.gl/Fk1d1Z2X9YHJvJgq8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold flex items-center gap-1">Get Directions <ArrowRight className="w-3 h-3"/></a></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DayTabs locationSchedule={schedule.chamundi} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
             <div className="text-center mt-12">
                <Button size="lg" asChild>
                    <Link href="/activities">
                        View All Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </main>
    );
}
