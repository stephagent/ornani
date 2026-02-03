import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "PENDING",
      name: "526 San Ysidro Road A",
      address: "526 SAN YSIDRO ROAD A, SANTA BARBARA, CA 93108",
      beds: 3,
      baths: 2,
      sqft: "1,845",
      price: "$3,750,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "FOR SALE",
      name: "4750 Calle Camarada",
      address: "4750 CALLE CAMARADA, SANTA BARBARA, CA 93111",
      beds: 3,
      baths: 3,
      sqft: "1,233",
      price: "$1,385,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "FOR SALE",
      name: "488 Barker Pass Road",
      address: "488 BARKER PASS ROAD, SANTA BARBARA, CA 93108",
      acres: "0.9",
      price: "$1,800,000",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Portfolio
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">PREVIOUS</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground text-sm font-medium">NEXT</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {properties.map((property, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute top-4 left-4 px-4 py-1 text-xs font-medium tracking-wider ${
                    property.status === "PENDING"
                      ? "bg-primary text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {property.status}
                </div>
              </div>

              {/* Property Info */}
              <div className="text-center space-y-2">
                <h3 className="text-lg font-light text-foreground">
                  {property.name}
                </h3>
                <p className="text-xs tracking-wider text-muted-foreground uppercase">
                  {property.address}
                </p>
                <p className="text-xs tracking-wider text-muted-foreground">
                  {property.beds && property.baths
                    ? `${property.beds} BD | ${property.baths} BA | ${property.sqft} SQ.FT.`
                    : `${property.acres} ACRES`}
                </p>
                <p className="text-lg font-medium text-foreground">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background tracking-wider px-12"
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
