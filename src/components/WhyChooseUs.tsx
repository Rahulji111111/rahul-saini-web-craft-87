import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Shield, Zap, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable for Small Business",
      description: "Competitive pricing designed for startups and small businesses. No hidden fees, transparent quotes."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. Most projects delivered in 2-4 weeks."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Secure & Modern",
      description: "Latest security practices, HTTPS encryption, and mobile-responsive designs for all devices."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized for speed and SEO. Your website will load fast and rank well in search engines."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "Personal support throughout the project and beyond. We're here when you need us."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "100% Satisfaction Guarantee",
      description: "Not happy? We'll keep working until you are. Your success is our priority."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Why Choose PixelCraft Studio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers – we're your digital success partners. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="card-enhanced p-6 text-center animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-primary mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Ready to get started?</span>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today for a free consultation and see how we can transform your digital presence.
          </p>
          <a 
            href="mailto:ankit@pixelcraftstudio.pro"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>📧 ankit@pixelcraftstudio.pro</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;