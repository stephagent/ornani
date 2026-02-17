import stephaniePhoto from "@/assets/stephanie.jpeg";

const MeetTheTeam = () => {
  return <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Meet<br />Stephanie</h2>
            
            <div className="space-y-1 text-muted-foreground">
              <p>CA DRE# 02180493</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Stephanie Ornani is a native Santa Barbarian with deep community roots, local market expertise, and an interior design background that elevates every client experience. She helps buyers uncover a home's true potential and guides sellers in presenting their property to attract maximum interest and strong results.</p>
              <p>When you sell with Stephanie, you gain a trusted strategic partner focused on positioning your home for exceptional visibility and the best possible outcome.</p>
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