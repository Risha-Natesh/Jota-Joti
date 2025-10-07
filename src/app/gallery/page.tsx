
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const albums = [
    {
        title: "JOTA-JOTI 2023 Highlights",
        url: "https://photos.app.goo.gl/7sZX1JHKsjfwAAWp7",
        imageId: "album-cover-1"
    },
    {
        title: "Scouting Adventures",
        url: "https://photos.app.goo.gl/vd1TKYpveh5LMGRx9",
        imageId: "album-cover-2"
    },
    {
        title: "Team Building Moments",
        url: "https://photos.app.goo.gl/m5qLBqp6iWxtkWpr9",
        imageId: "album-cover-3"
    },
    {
        title: "Community Projects",
        url: "https://photos.app.goo.gl/NJrhv8H49WvNCTEh6",
        imageId: "album-cover-4"
    },
    {
        title: "Campfire Memories",
        url: "https://photos.app.goo.gl/9rBHvTFDTu4sqAsH7",
        imageId: "album-cover-5"
    }
];

export default function GalleryPage() {
    return (
        <main className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Event Gallery</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Explore memories from our past events. We look forward to creating new ones with you!
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {albums.map(album => ({...album, image: getImage(album.imageId)})).map((album) => (
                    <Card key={album.title} className="overflow-hidden flex flex-col">
                        {album.image && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={album.image.imageUrl}
                                    alt={`Cover for ${album.title}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={album.image.imageHint}
                                />
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{album.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center">
                            <Button asChild>
                                <a href={album.url} target="_blank" rel="noopener noreferrer">
                                    View Album <ArrowRight className="ml-2" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}
