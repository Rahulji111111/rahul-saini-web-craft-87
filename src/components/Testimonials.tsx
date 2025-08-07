import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Local Bakery Owner",
      content: "Rahul transformed our small bakery's online presence. The website is beautiful and has helped us reach so many new customers. Professional work at an incredible value.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Mike Chen",
      company: "Marketing Consultant",
      content: "The data scraping solution Rahul built saves me 20 hours per week. His attention to detail and quick turnaround made this project a huge success.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Rodriguez",
      company: "Real Estate Agent",
      content: "Working with Rahul was a pleasure. He understood our needs perfectly and delivered a modern, responsive website that showcases our properties beautifully.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what some of my clients have to say about working together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;