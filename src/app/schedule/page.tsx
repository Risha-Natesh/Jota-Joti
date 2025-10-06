
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Utensils, Zap, Tent, Sunrise, Sunset, Radio, Film, Users, Award, Code, Gamepad2, ShieldCheck, Video, Sailboat, Trophy } from "lucide-react";

const schedule = {
  panchavati: {
    day1: [
      { time: "09:00 AM", event: "Registration & Kit Distribution", icon: <Zap className="w-5 h-5" /> },
      { time: "10:00 AM", event: "Inauguration Ceremony", icon: <Sunrise className="w-5 h-5" /> },
      { time: "11:00 AM", event: "Workshop: Basic Electronics", icon: <Zap className="w-5 h-5" /> },
      { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
      { time: "02:00 PM", event: "Digital Treasure Hunt", icon: <Gamepad2 className="w-5 h-5" /> },
      { time: "04:00 PM", event: "Guest Lecture: Tech for Good", icon: <Users className="w-5 h-5" /> },
      { time: "05:00 PM", event: "High Tea", icon: <Utensils className="w-5 h-5" /> },
      { time: "06:00 PM", event: "Day 1 Wrap Up", icon: <Sunset className="w-5 h-5" /> },
    ],
    day2: [
        { time: "09:30 AM", event: "Morning Briefing & Icebreakers", icon: <Sunrise className="w-5 h-5" /> },
        { time: "10:30 AM", event: "Workshop: Introduction to Coding", icon: <Code className="w-5 h-5" /> },
        { time: "12:00 PM", event: "JOTI Connect: Global Video Calls", icon: <Video className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
        { time: "02:00 PM", event: "Online Gaming Tournament (Minecraft & more)", icon: <Gamepad2 className="w-5 h-5" /> },
        { time: "04:00 PM", event: "Workshop: Cybersecurity for Scouts", icon: <ShieldCheck className="w-5 h-5" /> },
        { time: "05:30 PM", event: "Virtual Global Campfire", icon: <Users className="w-5 h-5" /> },
        { time: "07:00 PM", event: "Day 2 Wrap Up", icon: <Sunset className="w-5 h-5" /> },
    ],
    day3: [
        { time: "10:00 AM", event: "Project Showcase: Tech for a Better World", icon: <Award className="w-5 h-5" /> },
        { time: "11:30 AM", event: "JOTA-JOTI Challenge Finale", icon: <Trophy className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
        { time: "02:30 PM", event: "Prize Distribution & Closing Ceremony", icon: <Trophy className="w-5 h-5" /> },
        { time: "04:00 PM", event: "Feedback Session & Souvenirs", icon: <Users className="w-5 h-5" /> },
        { time: "04:30 PM", event: "Departure", icon: <Sunset className="w-5 h-5" /> },
    ]
  },
  chamundi: {
    day1: [
      { time: "09:00 AM", event: "On-site Registration", icon: <Tent className="w-5 h-5" /> },
      { time: "10:30 AM", event: "Introduction to Amateur Radio", icon: <Radio className="w-5 h-5" /> },
      { time: "11:30 AM", event: "First Radio Contact Session (JOTA)", icon: <Radio className="w-5 h-5" /> },
      { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
      { time: "02:30 PM", event: "Outdoor Game: Semaphore Challenge", icon: <Tent className="w-5 h-5" /> },
      { time: "04:30 PM", event: "Global Development Village Activities", icon: <Tent className="w-5 h-5" /> },
      { time: "06:00 PM", event: "Campfire & Cultural Exchange", icon: <Sunset className="w-5 h-5" /> },
      { time: "08:00 PM", event: "Dinner & Movie Screening", icon: <Film className="w-5 h-5" /> },
    ],
    day2: [
        { time: "09:00 AM", event: "Foxhunting: Radio Direction Finding", icon: <Radio className="w-5 h-5" /> },
        { time: "11:00 AM", event: "Pioneering Project: Build a Radio Tower", icon: <Tent className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Lunch Break", icon: <Utensils className="w-5 h-5" /> },
        { time: "02:00 PM", event: "JOTA Cross-Country Communication", icon: <Radio className="w-5 h-5" /> },
        { time: "04:00 PM", event: "Knot Tying & Lashing Workshop", icon: <Sailboat className="w-5 h-5" /> },
        { time: "06:30 PM", event: "International Food Fair", icon: <Utensils className="w-5 h-5" /> },
        { time: "08:00 PM", event: "Stargazing and Night Sky Navigation", icon: <Sunset className="w-5 h-5" /> },
    ],
    day3: [
        { time: "09:30 AM", event: "Scout's Own & Reflection", icon: <Sunrise classNamew-5 h-5 /> },
        { time: "10:30 AM", event: "Final Radio Contacts & QSL Card Exchange", icon: <Radio className="w-5 h-5" /> },
        { time: "12:00 PM", event: "Combined Closing Ceremony (Live Stream)", icon: <Award className="w-5 h-5" /> },
        { time: "01:00 PM", event: "Farewell Lunch", icon: <Utensils className="w-5 h-5" /> },
        { time: "02:00 PM", event: "Campsite Cleanup & Departure", icon: <Sunset className="w-5 h-5" /> },
    ]
  }
};


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
                            <CardTitle className="font-headline">Panchavati Schedule (Main Hub)</CardTitle>
                            <CardDescription>Main hub for workshops & digital activities.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <DayTabs locationSchedule={schedule.panchavati} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="chamundi">
                    <Card className="bg-transparent border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="font-headline">Sri Chamundi Base Schedule</CardTitle>
                            <CardDescription>Base for radio communication and outdoor games.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DayTabs locationSchedule={schedule.chamundi} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}

