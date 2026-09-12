import { use } from "react";
import Card from "./Card";
import type { ITechType } from "./types";

export interface CardsProps {
  techPromise: Promise<ITechType[]>;
  selectedStack: ITechType[];
  onAddToStack: (tech: ITechType) => void;
}

export default function Cards({
  techPromise,
  selectedStack,
  onAddToStack,
}: CardsProps) {
  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => {
        const isAdded = selectedStack.some((item) => item.id === tech.id);
        return (
          <Card
            key={tech.id}
            tech={tech}
            isAdded={isAdded}
            onAddToStack={onAddToStack}
          />
        );
      })}
    </div>
  );
}
