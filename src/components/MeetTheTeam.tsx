const MeetTheTeam = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Meet the Ani Team
            </h2>
            
            <div className="space-y-1 text-muted-foreground">
              <p>Marcy Bazzani | CA DRE# 01402612</p>
              <p>Stephanie Ornani | CA DRE# 02180493</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Ani Estate Group at Village Properties consists of Marcy
                Dolle Bazzani and Stephanie Ornani, your powerful real estate
                duo! They met at Santa Barbara High School in the 90s and now
                have over 26 years of real estate experience. Growing up in
                Santa Barbara provided them with a strong connection to the
                community, a deep understanding of the Santa Barbara area, and
                an incredible knowledge of the local real estate market.
              </p>
              <p>
                Village Properties is the only locally owned and operated real
                estate brokerage in Santa Barbara and has a strong commitment to
                contribution to and involvement in our local community.
              </p>
              <p>
                The Ani Estate Group and Village Properties are associated with
                several prestigious real estate networks including Forbes,
                Luxury Portfolio, Mayfair, and Leading RE. These partnerships
                provide an extensive network of resources, well-qualified
                buyers, and luxury property listings which is advantageous for
                both buyers and sellers.
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ani Estate Group Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
