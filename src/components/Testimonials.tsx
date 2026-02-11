import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Testimonials
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-white/70 text-sm">PREVIOUS</span>
                <span className="text-white/70">|</span>
                <span className="text-white text-sm font-medium">NEXT</span>
              </div>
            </div>

            {/* Right Side - Quote */}
            <div className="text-white space-y-6">
              <p className="text-lg leading-relaxed font-light">
                Stephanie is a true Real Estate professional. It's clear that
                she has a passion for and deep understanding of the market in
                Santa Barbara. She provided details and insight into the
                different neighborhoods that comprise the area and guided us
                through a remarkably easy and successful transaction. She is
                super responsive and has continued to provide answers and
                excellent local referrals. Will definitely work with her again
                and highly recommend.
              </p>
              <p className="text-sm tracking-wider">— DANA S.</p>
              
              <Link to="/testimonials">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-foreground tracking-wider px-8 mt-4"
                >
                  VIEW ALL
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
