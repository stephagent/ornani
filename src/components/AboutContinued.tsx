import { Button } from "@/components/ui/button";
const AboutContinued = () => {
  return <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Interior Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Beautiful Santa Barbara home interior" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
            </p>
              <p>
            </p>
              <p> </p>
            </div>

            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background tracking-wider px-8">
              MEET THE TEAM
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutContinued;