
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Radio } from "lucide-react";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";


const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);


const venues = [
    {
        name: "Panchavati",
        description: "Main hub for workshops, competitions, & digital activities.",
        address: "Panchavati, The Valley School Campus, Thatguni Post, Kanakapura Road, Bengaluru – 560082",
        locationUrl: "https://maps.app.goo.gl/cC787aQb9vq7HybE7",
        icon: <MapPin className="w-8 h-8" />,
        imageId: "venue-panchavati"
    },
    {
        name: "Sri Chamundi Scout Group",
        description: "Base for radio communication, outdoor games, & team activities.",
        address: "15th Cross Road, Malleshwaram, Bengaluru, Karnataka 560055",
        locationUrl: "https://maps.app.goo.gl/Fk1d1Z2X9YHJvJgq8",
        icon: <Radio className="w-8 h-8" />,
        imageId: "venue-chamundi"
    }
];


export default function VenuePage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Event Venues</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Our event is spread across two fantastic locations, each offering a unique set of activities.
                </p>
            </div>


            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {venues.map(venue => ({...venue, image: getImage(venue.imageId)})).map((venue) => (
                    <Card key={venue.name} className="overflow-hidden flex flex-col">
                        {venue.image && (
                             <div className="relative h-60 w-full">
                                <Image
                                    src={venue.image.imageUrl}
                                    alt={`Image of ${venue.name}`}
                                    data-ai-hint={venue.image.imageHint}
                                    fill
                                    className="object-cover"
                                />
                             </div>
                        )}
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">{venue.icon}</div>
                                <div>
                                    <CardTitle className="font-headline text-2xl">{venue.name}</CardTitle>
                                    <CardDescription>{venue.description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-grow">
                           <p className="text-muted-foreground">{venue.address}</p>
                            <a 
                                href={venue.locationUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                Get Directions <ArrowRight size={16} />
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}
