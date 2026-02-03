import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section
      className="relative py-32 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-5xl font-light mb-8 leading-relaxed">
          Hire us, you get us, no lockboxes,
          <br />
          no assistants.
        </h2>

        <p className="text-lg font-light leading-relaxed mb-4 max-w-3xl mx-auto">
          Ani Estate Group have been my realtors for several successful real
          estate transactions. Each time, I have found their knowledge,
          expertise and attention to detail impressive. They are both
          professional and personable. They provide a high level of
          attentiveness to their clients and are extremely efficient.
        </p>
        <p className="text-sm mb-8">-EJ</p>

        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-foreground tracking-wider px-12"
        >
          CONTACT US
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
