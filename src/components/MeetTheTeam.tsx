import stephaniePhoto from "@/assets/stephanie.jpeg";

const MeetTheTeam = () => {
  return <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Meet<br />Stephanie Ornani</h2>
            
            <div className="space-y-1 text-muted-foreground">
              <p>
            </p>
              <p>Stephanie Ornani | CA DRE# 02180493</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="">Stephanie is a native Santa Barbarian with deep-rooted knowledge of the local real estate market and an extensive network of local connections. Her passion for real estate, combined with her prior interior design career, uniquely positions her to offer clients a value-added experience.

Whether you're looking for a turnkey estate or a fun fixer-upper, Stephanie's experience renovating and decorating homes of all types and sizes can help you see and realize your vision. When it comes time to sell your home, she can help you position your house to maximize visibility, appeal, and interest. Her market knowledge, connections, enthusiasm, and resourcefulness will help you achieve success.

Stephanie was born and raised in Santa Barbara, with family roots dating back several generations. Beyond real estate, Stephanie is deeply engaged in the Santa Barbara community. She's served eight years with the National Charity League (NCL), a mother-daughter philanthropic organization, and is an active 





            </p>
              <p>
                Village Properties is the only locally owned and operated real
                estate brokerage in Santa Barbara and has a strong commitment to
                contribution to and involvement in our local community.
              </p>
              <p>Village Properties are associated with several prestigious real estate networks including Forbes, Luxury Portfolio, Mayfair, and Leading RE. These partnerships provide an extensive network of resources, well-qualified buyers, and luxury property listings which is advantageous for both buyers and sellers.</p>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={stephaniePhoto} alt="Stephanie Ornani" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MeetTheTeam;