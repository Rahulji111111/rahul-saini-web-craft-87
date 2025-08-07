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
          {/* Contact Information Only */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                <p className="text-muted-foreground">
                  Ready to discuss your project? Reach out via email for detailed project discussions.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 rounded-lg bg-muted/30 border border-primary/20">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <a 
                        href="mailto:ankit@pixelcraftstudio.pro" 
                        className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                      >
                        ankit@pixelcraftstudio.pro
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Best for detailed project discussions and inquiries
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/20">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Response Time</div>
                        <div className="text-sm text-muted-foreground">24-48 hours</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/20">
                      <Globe className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Remote Work</div>
                        <div className="text-sm text-muted-foreground">Global availability</div>
                      </div>
                    </div>
                  </div>
                </div>
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