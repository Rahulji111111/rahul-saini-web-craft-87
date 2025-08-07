import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/rahul-profile.jpg";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "B.Tech Computer Science",
      company: "VIT University",
      description: "Graduated with specialization in Gaming Technology. Successfully completed 15+ freelance projects during college, gaining extensive practical experience in full stack development.",
      type: "education"
    },
    {
      year: "2022-2024",
      title: "Freelance Web Developer",
      company: "Independent Practice",
      description: "Built modern websites and applications for small businesses, home service providers, and professional services. Developed expertise in affordable, scalable solutions with 100% client satisfaction.",
      type: "work"
    },
    {
      year: "2023-2024",
      title: "Data Analytics Specialist",
      company: "Freelance Projects",
      description: "Created custom automation scripts and data extraction solutions for e-commerce businesses and market research. Helped clients save 20+ hours weekly through automated processes.",
      type: "work"
    }
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Focused",
      description: "Every project starts with understanding your unique business needs and goals."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Driven",
      description: "Clean, maintainable code and beautiful designs that stand the test of time."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Minded",
      description: "Creating solutions that drive real business value and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                A passionate freelance web developer from Pune, India, dedicated to helping 
                small businesses and entrepreneurs establish their digital presence with modern, 
                affordable, and results-driven solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <Briefcase className="h-5 w-5" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="h-5 w-5" />
                  <span>Available for Remote Work</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Rahul Saini" 
                  className="w-80 h-80 rounded-2xl shadow-elegant object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-primary p-4 rounded-xl shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From computer science student to professional developer, here's how I got here
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4">
                      <Badge variant={item.type === 'work' ? 'default' : 'secondary'} className="mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              What Drives Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide my work and client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to discuss your project? I'd love to hear about your business goals 
            and see how I can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;