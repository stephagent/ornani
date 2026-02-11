import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";
import vpLogoWhite from "@/assets/vp-logo-white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "HOME SEARCH", href: "#search" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-10">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-sm font-medium tracking-wider hover:text-white/80 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm font-medium tracking-wider hover:text-white/80 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="tel:8057558283"
              className="text-white text-sm font-medium tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (805) 755-8283
            </a>
          </div>

          {/* VP Logo - Right */}
          <img src={vpLogoWhite} alt="Village Properties" className="h-10 shrink-0" />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white text-sm font-medium tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white text-sm font-medium tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <a
                href="tel:8057558283"
                className="text-white text-sm font-medium tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (805) 755-8283
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
