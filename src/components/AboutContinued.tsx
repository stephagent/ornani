import { Button } from "@/components/ui/button";

const AboutContinued = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Interior Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Santa Barbara home interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Working with Marcy and Stephanie means dedication of personal
                attention to you and your property. No assistants, no lock boxes
                on the door, just Marcy and Stephanie, present and engaged for
                all showings and inspections. They will be there every step of
                the way to protect you.
              </p>
              <p>
                The Ani Estate Group focuses on serving the Santa Barbara
                region, covering a variety of areas including Carpinteria,
                Summerland, Montecito, Santa Barbara proper, Goleta, and Santa
                Ynez. This broad coverage demonstrates their expertise in
                various neighborhoods and their ability to cater to a diverse
                range of real estate needs.
              </p>
              <p>
                Overall, the Ani Estate Group is a well-established and
                experienced real estate partnership with a strong local
                connection and a commitment to personalized service for all
                clients across a wide range of areas in Santa Barbara. Their
                affiliations with renowned real estate networks also highlight
                their dedication to providing high-quality services and access
                to exclusive resources.
              </p>
            </div>

            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background tracking-wider px-8"
            >
              MEET THE TEAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContinued;
