
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
    const mainOrganizers = [
      { name: "Sri Chamundi Scout Group", logoId: "partner-logo-1" },
      { name: "NSS RVU", logoId: "partner-logo-2" },
    ];
    
    return (
        <main className="container py-12 md:py-24">
            <div className="space-y-12">
                <div className="space-y-4 text-center">
                    <SectionTitle>Organizers</SectionTitle>
                    <SectionSubtitle>This event is made possible by the collaborative efforts of our dedicated organizers.</SectionSubtitle>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline text-center mb-8">Main Organizers</h3>
                  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                      {mainOrganizers.map(p => ({...p, logo: getImage(p.logoId)})).map((p) => p.logo && (
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
            </div>
        </main>
    );
}
