const Affiliations = () => {
  const affiliations = [
    { name: "Forbes Global Properties", logo: "Forbes" },
    { name: "Leading RE", logo: "Leading" },
    { name: "Luxury Portfolio International", logo: "LP" },
    { name: "Mayfair", logo: "MAYFAIR" },
  ];

  return (
    <section className="py-16 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {affiliations.map((affiliation) => (
            <div
              key={affiliation.name}
              className="text-white/90 text-xl md:text-2xl font-light tracking-wider"
            >
              {affiliation.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
