import { Button } from "@/components/ui/button";
import missionImage from "@/assets/santa-barbara-mission.png";

const CallToAction = () => {
  return (
    <section
      className="relative py-32 px-6 bg-cover bg-[center_top_30%] bg-no-repeat"
      style={{
        backgroundImage: `url(${missionImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-5xl font-light mb-8 leading-relaxed">
          Let's make your next move a success—reach out today.
        </h2>



        <a href="tel:8057558283">
          <Button
            variant="outline"
            className="border-white bg-white text-foreground hover:bg-white/90 tracking-wider px-12"
          >
            CONTACT
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
