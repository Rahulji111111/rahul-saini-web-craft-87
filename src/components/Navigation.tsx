import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import pixelcraftLogo from "@/assets/pixelcraft-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/90 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={pixelcraftLogo} alt="PixelCraft Studio" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              PixelCraft Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="mailto:ankit@pixelcraftstudio.pro"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">ankit@pixelcraftstudio.pro</span>
            </a>
            <Button asChild className="btn-primary font-semibold">
              <Link to="/contact">Get Free Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border/50">
                <a 
                  href="mailto:ankit@pixelcraftstudio.pro"
                  className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">ankit@pixelcraftstudio.pro</span>
                </a>
                <Button asChild className="w-full btn-primary font-semibold">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Free Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;