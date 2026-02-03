import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 px-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-light text-foreground mb-8">
              Ani Estate Group
            </h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">Get in Touch</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">EMAIL</p>
                      <p className="text-foreground">ANI@VILLAGESITE.COM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">ADDRESS</p>
                      <p className="text-foreground">1250 COAST VILLAGE RD</p>
                      <p className="text-foreground">SANTA BARBARA CA 93108</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">MARCY BAZZANI</p>
                      <p className="text-foreground">(805) 717-0450</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">STEPHANIE ORNANI</p>
                      <p className="text-foreground">(805) 755-8283</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Logos */}
          <div className="flex items-center justify-center md:justify-end gap-8">
            <div className="text-center">
              <div className="text-lg font-medium text-foreground">VILLAGE</div>
              <div className="text-xs text-muted-foreground">PROPERTIES</div>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-foreground/30 flex items-center justify-center">
              <div className="text-center leading-tight">
                <div className="text-xs font-light tracking-wider text-foreground">A N I</div>
                <div className="text-[8px] tracking-widest text-muted-foreground">ESTATE GROUP</div>
              </div>
            </div>
          </div>
        </div>

        {/* License Info */}
        <div className="text-sm text-muted-foreground space-y-2 mb-8">
          <p>Marcy Bazzani | CA DRE# 01402612</p>
          <p>Stephanie Ornani | CA DRE# 02180493</p>
          <p>Village Properties, Inc. | CA DRE# 01206734</p>
        </div>

        <p className="text-xs text-muted-foreground mb-8">
          All information is deemed reliable but not guaranteed and should be
          independently reviewed and verified.
        </p>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Real Estate Website Design by Luxury Presence
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Copyright © 2026 | Privacy Policy
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
