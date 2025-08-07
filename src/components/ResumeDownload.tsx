import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Award, Code } from "lucide-react";

const ResumeDownload = () => {
  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    // For now, we'll show a toast or open a sample PDF
    const link = document.createElement('a');
    link.href = '/rahul-saini-resume.pdf'; // This would be a real PDF file
    link.download = 'Rahul-Saini-Freelance-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    {
      icon: <Code className="h-5 w-5" />,
      text: "Full Stack Development"
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "15+ Completed Projects"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      text: "Bachelor's in Computer Science"
    }
  ];

  return (
    <Card className="shadow-card hover:shadow-hover transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Download Resume</h3>
          <p className="text-muted-foreground text-sm">
            Get a detailed overview of my skills, experience, and project portfolio
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {resumeHighlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-primary">
                {item.icon}
              </div>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={handleDownload}
          className="w-full bg-accent-gradient text-primary hover:shadow-hover font-semibold"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF Resume
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          Updated December 2024
        </p>
      </CardContent>
    </Card>
  );
};

export default ResumeDownload;