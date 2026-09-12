import { Suspense, useState } from "react";
import Cards from "./Cards";
import type { ITechType } from "./types";
import { toast } from "react-toastify";
import { TbX } from "react-icons/tb";
import Spinner from "./Spinner";

const fetchTechnologies = async (): Promise<ITechType[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const techPromise = fetchTechnologies();

export default function TechCatalog() {
  const [selectedStack, setSelectedStack] = useState<ITechType[]>([]);

  const handleAddToStack = (tech: ITechType) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack((prevStack) => [...prevStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const techToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack((prevStack) => prevStack.filter((item) => item.id !== id));
    if (techToRemove) {
      toast.info(`${techToRemove.name} removed from stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from stack.");
  };

  return (
    <section
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50"
      id="technologies"
    >
      <div className="max-w-356.25 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Explore the <span className="text-[#D91B7E]">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3">
            <Suspense fallback={<Spinner />}>
              <Cards
                techPromise={techPromise}
                selectedStack={selectedStack}
                onAddToStack={handleAddToStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1 bg-white border border-gray-100 rounded-3xl p-6 shadow-xs sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Your Stack
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-6">
              {selectedStack.length === 0
                ? "No technologies selected yet"
                : `${selectedStack.length} ${
                    selectedStack.length === 1 ? "Technology" : "Technologies"
                  } Selected`}
            </p>

            {selectedStack.length === 0 ? (
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center my-4">
                <p className="text-slate-400 text-xs font-medium">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="space-y-3 mb-6">
                {selectedStack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between p-3.5 border border-slate-100 rounded-2xl bg-white shadow-2xs hover:border-slate-200 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {tech.name}
                        </h4>
                        <span className="text-[10px] font-medium text-slate-400 block">
                          {tech.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(tech.id)}
                      className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1"
                      aria-label="Remove item"
                    >
                      <TbX className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {selectedStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full py-3 text-sm font-semibold text-[#E5484D] border border-[#FFCDD2] hover:bg-red-50 rounded-2xl transition duration-200 cursor-pointer"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
