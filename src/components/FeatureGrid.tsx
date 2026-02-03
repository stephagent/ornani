const FeatureGrid = () => {
  const features = [
    {
      title: "Neighborhoods",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "large",
    },
    {
      title: "Santa Barbara Home Search",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "medium",
    },
    {
      title: "Testimonials",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "medium",
    },
    {
      title: "Global Affiliations",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "small",
    },
    {
      title: "HOW MUCH IS YOUR PROPERTY WORTH",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "small",
      isHighlight: true,
    },
    {
      title: "Local Activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "wide",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Neighborhoods - Large */}
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden">
            <div className="aspect-square md:aspect-auto md:h-full">
              <img
                src={features[0].image}
                alt={features[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white text-2xl md:text-3xl font-light">
                  {features[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Santa Barbara Home Search */}
          <div className="relative group cursor-pointer overflow-hidden">
            <div className="aspect-square">
              <img
                src={features[1].image}
                alt={features[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="text-white text-lg md:text-xl font-light">
                  Santa Barbara<br />Home Search
                </h3>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative group cursor-pointer overflow-hidden">
            <div className="aspect-square">
              <img
                src={features[2].image}
                alt={features[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="text-white text-lg md:text-xl font-light">
                  {features[2].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Global Affiliations */}
          <div className="relative group cursor-pointer overflow-hidden">
            <div className="aspect-square">
              <img
                src={features[3].image}
                alt={features[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white text-base font-light">
                  {features[3].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Property Worth - Highlight */}
          <div className="relative group cursor-pointer overflow-hidden bg-primary">
            <div className="aspect-square flex items-center justify-center p-4 text-center">
              <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                HOW MUCH<br />IS YOUR<br />PROPERTY<br />WORTH
              </h3>
            </div>
          </div>

          {/* Local Activities */}
          <div className="col-span-2 relative group cursor-pointer overflow-hidden">
            <div className="aspect-[2/1]">
              <img
                src={features[5].image}
                alt={features[5].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-light">
                  {features[5].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
