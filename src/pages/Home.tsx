import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Globe, Users, Trophy, MapPin, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "15+ Projects",
      description: "Successfully delivered freelance web development projects"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "100% Success Rate",
      description: "Every project delivered on time and within budget"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Focused",
      description: "Specializing in small business and startup solutions"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Global Reach",
      description: "Remote-first, serving clients worldwide"
    }
  ];

  const services = [
    {
      title: "Custom Website Development",
      description: "Modern, responsive websites for small businesses, local shops, and professional services",
      features: ["Mobile-friendly design", "SEO optimized", "Fast loading", "Professional look"]
    },
    {
      title: "Data Scraping & Analytics",
      description: "Automated data extraction and competitive insights for business intelligence",
      features: ["Python automation", "Market research", "Competitor analysis", "Data visualization"]
    },
    {
      title: "API Integration & Automation",
      description: "Seamless integrations and workflow automation to streamline business operations",
      features: ["REST API development", "Third-party integrations", "Process automation", "Real-time dashboards"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      
      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="text-center shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
              Services We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Affordable, professional web solutions tailored for small businesses and entrepreneurs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="premium">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Let's discuss your project and see how PixelCraft Studio can help bring your vision to life. 
            Free consultation and project samples available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="btn-primary font-semibold"
            >
              <Link to="/contact">Get Free Demo</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;