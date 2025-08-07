import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ResumeDownload from "@/components/ResumeDownload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Clock, 
  LinkedinIcon, 
  Github, 
  Phone,
  Send,
  MessageSquare,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "ankit@pixelcraftstudio.pro",
      action: "mailto:ankit@pixelcraftstudio.pro",
      description: "Best for detailed project discussions"
    },
    {
      icon: <LinkedinIcon className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Connect with us",
      action: "https://linkedin.com/company/pixelcraftstudio",
      description: "Professional networking and updates"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "View our code",
      action: "https://github.com/pixelcraftstudio",
      description: "Check out our open source work"
    }
  ];

  const faqs = [
    {
      question: "What's included in a free consultation?",
      answer: "We'll discuss your project goals, requirements, timeline, and I'll provide a detailed proposal with transparent pricing."
    },
    {
      question: "Do you provide samples or mockups?",
      answer: "Yes! I can create a sample page or data analysis demo to show you the quality and approach before starting the full project."
    },
    {
      question: "What are your typical project timelines?",
      answer: "Simple websites: 2-3 weeks, Complex applications: 4-6 weeks, Data scraping projects: 1-2 weeks. Rush delivery available."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I'm experienced with remote work and have flexible hours to accommodate different time zones."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Let's Work Together</h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing? Let's discuss your project and see how 
            PixelCraft Studio can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24-48 hour response time</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>Remote work friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Business Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your business name (optional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="scraping">Data Scraping</SelectItem>
                          <SelectItem value="api">API Integration</SelectItem>
                          <SelectItem value="maintenance">Website Maintenance</SelectItem>
                          <SelectItem value="consultation">Just Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-300">Under $300</SelectItem>
                          <SelectItem value="300-600">$300 - $600</SelectItem>
                          <SelectItem value="600-1000">$600 - $1,000</SelectItem>
                          <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                          <SelectItem value="2000-plus">$2,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush delivery)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project, goals, specific requirements, and any questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Project Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Methods */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-medium">{method.title}</div>
                      <div className="text-sm text-primary">{method.value}</div>
                      <div className="text-xs text-muted-foreground">{method.description}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Location & Availability */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Based in Pune, India</div>
                    <div className="text-sm text-muted-foreground">
                      Open to remote work worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Flexible Hours</div>
                    <div className="text-sm text-muted-foreground">
                      IST timezone, adaptable for international clients
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Badge variant="secondary" className="mb-2">Currently Available</Badge>
                  <p className="text-sm text-muted-foreground">
                    Taking on new projects. Typical response time: 24-48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <ResumeDownload />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;