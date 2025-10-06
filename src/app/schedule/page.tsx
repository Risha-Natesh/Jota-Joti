
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Utensils, Zap, Tent, Sunrise, Sunset, Radio, Film } from "lucide-react";

const panchavatiSchedule = [
  { time: "09:00 AM", event: "Registration & Kit Distribution", icon: <Zap className="w-5 h-5" /> },
  { time: "10:00 AM", event: "Inauguration Ceremony", icon: <Sunrise className="w-5 h-5" /> },
  { time: "11:00 AM", event: "Workshop: Basic Electronics", icon: <Zap className="w-5 h-5" /> },
  { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
  { time: "02:00 PM", event: "Digital Treasure Hunt", icon: <Zap className="w-5 h-5" /> },
  { time: "04:00 PM", event: "Guest Lecture: Tech for Good", icon: <Zap className="w-5 h-5" /> },
  { time: "05:00 PM", event: "High Tea", icon: <Utensils className="w-5 h-5" /> },
  { time: "06:00 PM", event: "Day 1 Wrap Up", icon: <Sunset className="w-5 h-5" /> },
];

const chamundiSchedule = [
    { time: "09:00 AM", event: "On-site Registration", icon: <Tent className="w-5 h-5" /> },
    { time: "10:30 AM", event: "Introduction to Amateur Radio", icon: <Radio className="w-5 h-5" /> },
    { time: "11:30 AM", event: "First Radio Contact Session (JOTA)", icon: <Radio className="w-5 h-5" /> },
    { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
    { time: "02:30 PM", event: "Outdoor Game: Semaphore Challenge", icon: <Tent className="w-5 h-5" /> },
    { time: "04:30 PM", event: "Global Development Village Activities", icon: <Tent className="w-5 h-5" /> },
    { time: "06:00 PM", event: "Campfire & Cultural Exchange", icon: <Sunset className="w-5 h-5" /> },
    { time: "08:00 PM", event: "Dinner & Movie Screening", icon: <Film className="w-5 h-5" /> },
];


const ScheduleTimeline = ({ items }: { items: { time: string, event: string, icon: React.ReactNode }[] }) => (
    <div className="relative pl-8">
        <div className="absolute left-0 h-full w-px bg-border -translate-x-1/2 ml-4"></div>
        {items.map((item, index) => (
            <div key={index} className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center absolute left-0 -translate-x-1/2">
                    <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                        <div className="text-primary">{item.icon}</div>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium">{item.time}</p>
                    <p className="font-semibold text-foreground">{item.event}</p>
                </div>
            </div>
        ))}
    </div>
);


export default function SchedulePage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Event Schedule</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Here’s what we have planned for JOTA-JOTI 2025. Choose a location to see the detailed schedule for Day 1.
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
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Panchavati Schedule (Main Hub)</CardTitle>
                            <CardDescription>Main hub for workshops & digital activities.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScheduleTimeline items={panchavatiSchedule} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="chamundi">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Sri Chamundi Base Schedule</CardTitle>
                            <CardDescription>Base for radio communication and outdoor games.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScheduleTimeline items={chamundiSchedule} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}
