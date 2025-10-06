
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center", className)}>
      {children}
    </h2>
  );
  
const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
<p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center", className)}>
    {children}
</p>
);

export default function OrganizersPage() {
    const partners = [
      { name: "Sri Chamundi Scout Group", logo: getImage("partner-logo-1") },
      { name: "NSS RVU", logo: getImage("partner-logo-2") },
      { name: "Outdoor Dynamix", logo: getImage("partner-logo-3") },
      { name: "Prakruthi Shaale", logo: getImage("partner-logo-4") },
    ];
    return (
        <main className="container py-12 md:py-24">
            <div className="space-y-12">
                <div className="space-y-4 text-center">
                    <SectionTitle>Organizers & Partners</SectionTitle>
                    <SectionSubtitle>This event is made possible by the collaborative efforts of our dedicated organizers and supportive partners.</SectionSubtitle>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partners.map((p) => p.logo && (
                    <div key={p.name} className="flex flex-col items-center gap-2">
                    <Image
                        src={p.logo.imageUrl}
                        alt={p.name}
                        data-ai-hint={p.logo.imageHint}
                        width={150}
                        height={75}
                        className="object-contain grayscale hover:grayscale-0 transition-all"
                    />
                    <span className="text-sm font-semibold text-muted-foreground">{p.name}</span>
                    </div>
                ))}
                </div>
            </div>
        </main>
    );
}
