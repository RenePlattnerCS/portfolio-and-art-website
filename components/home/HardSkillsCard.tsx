import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HardSkill } from "@/components/home/SkillsData";

interface HardSkillCardProps {
  skill: HardSkill;
}

function StarRating({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < level ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function HardSkillCard({ skill }: HardSkillCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-secondary">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{skill.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.percentage}%` }}
          />
        </div>

        {/* Details */}
        <CardDescription className="text-sm leading-relaxed">
          {skill.details}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
