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
              <p>Stephanie Ornani is a native Santa Barbarian with deep local roots, market expertise, and a background in interior design that brings added value to every client experience. She specializes in helping buyers recognize a home's potential and guiding sellers in presenting their property to maximize appeal and results.</p>
              <p>When you sell with Stephanie, you gain a strategic partner who knows how to position your home for maximum visibility, strong interest, and the best possible outcome.</p>
              <p>Because when it comes to your home, who you work with matters.</p>
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