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
              <p>Stephanie Ornani is a native Santa Barbarian with deep generational roots in the community and a strong understanding of the local real estate market. With a background in interior design and an extensive network of trusted local connections, she offers clients a uniquely full-service approach to buying and selling homes.</p>
              <p>Whether you're searching for a turnkey coastal retreat or a charming fixer-upper, Stephanie brings a trained eye for potential and a passion for helping clients envision what a home can become. When selling, she excels at positioning properties to maximize appeal through thoughtful presentation and strategic marketing.</p>
              <p>Deeply involved in Santa Barbara, Stephanie has served for eight years with the National Charity League, spent time on the Santa Barbara High School PTSA Board, and is currently an active member of Rotary. She is dedicated to delivering exceptional results — because who you work with truly matters.</p>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative w-[90%] mx-auto">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={stephaniePhoto} alt="Stephanie Ornani" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MeetTheTeam;