import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SoftSkill } from "./SkillsData";
import { FaStar } from "react-icons/fa";

interface SoftSkillCardProps {
  skill: SoftSkill;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
}

export function SoftSkillCard({ skill }: SoftSkillCardProps) {
  return (
    <Card className="border-l-4 border-l-blue-400  bg-secondary hover:translate-x-1 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-lg">{skill.title}</CardTitle>
        <StarRating rating={skill.rating} />
      </CardHeader>

      <CardContent>
        <CardDescription className="leading-relaxed">
          {skill.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
