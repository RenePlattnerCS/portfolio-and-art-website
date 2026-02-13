import { hardSkills, softSkills } from "./SkillsData";
import { HardSkillCard } from "./HardSkillsCard";
import { SoftSkillCard } from "./SoftSkillsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsList() {
  return (
    <div>
      <Card className="shadow-2xl">
        <CardContent className="p-8 lg:p-12">
          {/* Hard Skills Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-blue-600">
              Hard Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardSkills.map((skill, index) => (
                <HardSkillCard key={index} skill={skill} />
              ))}
            </div>
          </section>

          {/* Soft Skills Section */}
          <section>
            <h2 className="text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-blue-600">
              Soft Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={index} skill={skill} />
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
