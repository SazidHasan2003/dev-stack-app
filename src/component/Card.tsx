import type { ITechType } from "./types";

interface CardProps {
  tech: ITechType;
  isAdded: boolean;
  onAddToStack: (tech: ITechType) => void;
}

export default function Card({ tech, isAdded, onAddToStack }: CardProps) {
  const { name, description, category, difficulty, rating, badge, icon } = tech;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          </div>
          {badge && (
            <span className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-600 rounded-full border border-sky-100">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5 mb-4 text-xs">
          <span className="font-medium text-slate-600">{category}</span>
          <span className="text-slate-500">{difficulty}</span>
          <div className="flex items-center space-x-1 font-semibold text-slate-800">
            <span className="text-amber-400">★</span>
            <span>{rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 text-xs font-semibold rounded-xl transition-colors duration-200 cursor-pointer ${
            isAdded
              ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
              : "bg-[#0B0F19] hover:bg-[#1E293B] text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
