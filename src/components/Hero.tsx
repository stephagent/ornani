import Navbar from "./Navbar";
import logoWhite from "@/assets/logo-white.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <img src={logoWhite} alt="Logo" className="h-96 w-auto mb-6" />
        <div className="space-y-1">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Marcy Bazzani | CA DRE# 01402612
          </p>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Stephanie Ornani | CA DRE# 02180493
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
