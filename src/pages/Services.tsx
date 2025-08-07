import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Database, Code, BarChart, Wrench, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Custom Website Development",
      description: "Modern, responsive websites tailored for small businesses and entrepreneurs",
      features: [
        "Mobile-first responsive design",
        "SEO optimization and fast loading",
        "Contact forms and business integration",
        "Content management systems",
        "E-commerce functionality",
        "Social media integration"
      ],
      pricing: "Starting from $299",
      timeline: "2-4 weeks",
      ideal: ["Local shops", "Service providers", "Professionals", "Startups"]
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Scraping & Analytics",
      description: "Automated data extraction and competitive intelligence for business insights",
      features: [
        "Custom Python automation scripts",
        "Competitor price monitoring",
        "Market research and trends",
        "Data visualization dashboards",
        "Regular automated reports",
        "Custom data analysis"
      ],
      pricing: "Starting from $149",
      timeline: "1-2 weeks",
      ideal: ["E-commerce", "Market research", "Real estate", "Analytics teams"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "API Integration & Automation",
      description: "Seamless integrations and workflow automation to streamline operations",
      features: [
        "Third-party API connections",
        "Payment gateway integration",
        "CRM and database syncing",
        "Automated workflows",
        "Real-time dashboards",
        "Custom business tools"
      ],
      pricing: "Starting from $199",
      timeline: "1-3 weeks",
      ideal: ["SaaS companies", "Agencies", "Online businesses", "Enterprises"]
    }
  ];

  const additionalServices = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Website Maintenance",
      description: "Ongoing updates, security, and performance optimization",
      pricing: "$59/month"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Efficient database architecture and optimization",
      pricing: "$149+"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rush Projects",
      description: "Expedited delivery for urgent requirements",
      pricing: "+50% premium"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We discuss your needs, goals, and project requirements"
    },
    {
      step: "2",
      title: "Proposal & Planning",
      description: "Detailed project scope, timeline, and transparent pricing"
    },
    {
      step: "3",
      title: "Development",
      description: "Regular updates and feedback throughout the build process"
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Thorough testing, deployment, and handover with documentation"
    },
    {
      step: "5",
      title: "Support",
      description: "Ongoing maintenance and support as needed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Services & Pricing</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Affordable, professional web solutions designed specifically for small businesses, 
            local shops, and service providers
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Project Success</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development solutions to help your business thrive online
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-t">
                      <span className="font-medium">Starting Price:</span>
                      <span className="text-primary font-bold">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Timeline:</span>
                      <span className="text-muted-foreground">{service.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Ideal for:</h5>
                    <div className="flex flex-wrap gap-1">
                      {service.ideal.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Supporting services to keep your digital presence running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={service.title}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-primary font-bold">{service.pricing}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              How We Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent, collaborative process designed to deliver exactly what you need
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Free consultation, transparent pricing, and samples available. 
            Let's discuss your project and see how I can help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/projects">View Past Work</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;