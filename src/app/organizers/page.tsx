
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const organizers = [
    {
        name: "Sri Chamundi Scout Group",
        imageId: "organizer-scsg",
        description: "Founded on the principles of community service and youth development, Sri Chamundi Scout Group has been a cornerstone of scouting in the region for decades. We are dedicated to instilling values of leadership, self-reliance, and camaraderie in young people. Through a variety of outdoor activities, skill-building workshops, and community projects, we empower our scouts to become responsible citizens and future leaders. Our experienced leaders guide scouts on a journey of personal growth, adventure, and lifelong learning, preparing them to make a positive impact on the world."
    },
    {
        name: "Outdoor Dynamix",
        imageId: "organizer-odx",
        description: "Outdoor Dynamix specializes in creating transformative outdoor experiences that challenge and inspire. We believe that nature is the ultimate classroom, offering invaluable lessons in teamwork, resilience, and problem-solving. Our team designs and facilitates a wide range of adventure-based programs, from team-building games to leadership expeditions. By pushing boundaries in a safe and supportive environment, we help individuals and groups unlock their full potential. For JOTA-JOTI, we are excited to bring our expertise in dynamic and engaging activities to the forefront."
    },
    {
        name: "NSS RVU",
        imageId: "organizer-nss",
        description: "The National Service Scheme (NSS) unit at RV University is committed to fostering a spirit of social responsibility and community engagement among students. Our motto, 'Not Me, But You,' reflects our dedication to selfless service. NSS RVU actively organizes and participates in a variety of social initiatives, including environmental conservation drives, health and wellness camps, and educational outreach programs. We aim to connect students with the community, providing them with opportunities to contribute meaningfully to society while developing their own character and leadership skills."
    }
];

export default function OrganizersPage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Organizers</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Meet the dedicated teams making JOTA-JOTI 2025 possible.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {organizers.map(org => ({ ...org, image: getImage(org.imageId) })).map((organizer) => (
                    <Card key={organizer.name} className="flex flex-col text-center">
                        <CardHeader>
                            {organizer.image && (
                                <div className="relative h-24 w-24 mx-auto mb-4">
                                    <Image
                                        src={organizer.image.imageUrl}
                                        alt={`Logo for ${organizer.name}`}
                                        data-ai-hint={organizer.image.imageHint}
                                        width={96}
                                        height={96}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            )}
                            <CardTitle className="font-headline text-xl">{organizer.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                           <CardDescription>{organizer.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}
