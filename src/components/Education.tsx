import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const educationList: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering, Chengannur",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MES College Kunnukara",
    period: "2017 – 2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 transition-all hover:border-primary/50"
            >
              <div className="p-3 rounded-full bg-secondary flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
