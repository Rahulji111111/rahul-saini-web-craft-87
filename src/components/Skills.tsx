import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "bg-primary"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Error Handling"],
      color: "bg-secondary"
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      color: "bg-accent"
    },
    {
      title: "Other",
      skills: ["Python", "Selenium", "Data Scraping", "Git", "Deployment", "API Integration"],
      color: "bg-muted"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="text-xs hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;