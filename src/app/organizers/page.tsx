
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const organizers = [
    {
        name: "Sri Chamundi Scout Group",
        imageId: "organizer-scsg",
    },
    {
        name: "Outdoor Dynamix",
        imageId: "organizer-odx",
    },
    {
        name: "NSS RVU",
        imageId: "organizer-nss",
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {organizers.map(org => ({ ...org, image: getImage(org.imageId) })).map((organizer) => (
                    <Card key={organizer.name} className="flex flex-col items-center text-center">
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
                    </Card>
                ))}
            </div>
        </main>
    );
}
