import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardProject from "@/assets/dashboard-project.jpg";
import scrapingProject from "@/assets/scraping-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Business Intelligence Dashboard",
      description: "Comprehensive analytics dashboard for small businesses with real-time API integration, data visualization, and automated reporting features.",
      image: dashboardProject,
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      features: [
        "Real-time data visualization",
        "Custom KPI tracking",
        "Performance analytics",
        "User management system"
      ],
      type: "Freelance Project",
      status: "Client Success Story"
    },
    {
      title: "Data Scraping & Analytics Suite",
      description: "Custom automation scripts for market research and competitor analysis using Python and Selenium.",
      image: scrapingProject,
      technologies: ["Python", "Selenium", "Pandas", "Data Visualization"],
      features: [
        "Automated data extraction",
        "Competitor price monitoring",
        "Market trend analysis",
        "Customizable reporting"
      ],
      type: "Freelance Project",
      status: "Multiple Clients"
    },
    {
      title: "Small Business Website Portfolio",
      description: "Collection of 10+ responsive websites built for local businesses, shops, and service providers.",
      image: "/placeholder.svg",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      features: [
        "Mobile-first design",
        "SEO optimization",
        "Contact forms",
        "Business showcases"
      ],
      type: "Freelance Portfolio",
      status: "10+ Completed"
    }
  ];

  const achievements = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "15+ Projects",
      description: "Successfully delivered websites and applications"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Happy Clients",
      description: "Small businesses and startups across various industries"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Solutions",
      description: "Custom automation saving clients 20+ hours weekly"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            A showcase of web applications, dashboards, and automation solutions 
            I've built for businesses and clients
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white/80 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{project.type}</Badge>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help bring your ideas to life with a custom solution 
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;