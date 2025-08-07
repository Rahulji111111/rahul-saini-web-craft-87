import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import pixelcraftLogo from "@/assets/pixelcraft-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Custom Website Development",
    "Data Scraping & Analytics",
    "API Integration",
    "Website Maintenance",
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={pixelcraftLogo} alt="PixelCraft Studio" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
                PixelCraft Studio
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional web development and digital solutions for small businesses and startups. 
              Modern, responsive websites that drive results.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:ankit@pixelcraftstudio.pro"
                className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">ankit@pixelcraftstudio.pro</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">🌍 Remote-first • Global reach</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Signals & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Why Choose Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">✓</span>
                <span className="text-sm">Affordable pricing for small businesses</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">✓</span>
                <span className="text-sm">Fast delivery & responsive design</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">✓</span>
                <span className="text-sm">100% satisfaction guarantee</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">✓</span>
                <span className="text-sm">Modern & secure solutions</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/pixelcraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/company/pixelcraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} PixelCraft Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-xs">
                Built with ♥ by PixelCraft Studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;