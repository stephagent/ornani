import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/santa-barbara-coastline.jpg";

const testimonials = [
  {
    name: "Dana S.",
    text: "Stephanie is a true Real Estate professional. It's clear that she has a passion for and deep understanding of the market in Santa Barbara. She provided details and insight into the different neighborhoods that comprise the area and guided us through a remarkably easy and successful transaction. She is super responsive and has continued to provide answers and excellent local referrals. Will definitely work with her again and highly recommend.",
  },
  {
    name: "Lisa A.",
    text: "My husband and I loved working with Steph to find our first home in Santa Barbara! She was patient, hardworking, knowledgeable and dedicated through many months of home searching. She has extensive knowledge of the area, school system, and much more that empowered us to make informed decisions with her guidance. Beyond her professionalism and expertise, Steph is truly a wonderful, kind-hearted person and fun to be around, making a stressful process easier and more enjoyable!",
  },
  {
    name: "James K.",
    text: "Stephanie was the best realtor I've ever worked with, over a lifetime of buying and selling houses. Not only with her advice about how and how much to renovate before putting my house on the market, but she practically acted as a general contractor, getting bids for work to be done, meeting the subs at the house, settling on what needed to be done and what could be let go-all in consultation with me. We ended up getting a great realistic price after being on the market for only 2 weeks. I'd use her again in a heart beat.",
  },
];

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Navbar />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">Testimonials</h1>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-3xl space-y-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>

          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-8 space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground font-light italic">
                "{t.text}"
              </p>
              <p className="text-sm tracking-wider text-foreground font-medium">— {t.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TestimonialsPage;
