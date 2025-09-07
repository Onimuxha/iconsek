import { useEffect, useMemo, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { IconCard } from "../components/IconCard";
import { Modal } from "../components/Modal";
import { Settings } from "lucide-react";
import { allIconData, weightDataMap, type Weight } from "../lib/icons";

const weights: Weight[] = ["linear", "bold", "duocolor", "bulk", "gestalt"];

export default function Gallery() {
  const { query } = useSearch();
  const [weight, setWeight] = useState<Weight>("linear");
  const [category, setCategory] = useState<string>("all");
  const [size, setSize] = useState<number>(48);
  const [thickness, setThickness] = useState<number>(1.5);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      const weightMap: Record<string, Weight> = {
        "1": "linear", "2": "bold", "3": "duocolor", "4": "bulk", "5": "gestalt"
      };
      if (weightMap[e.key]) setWeight(weightMap[e.key]);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filteredIcons = useMemo(() => {
    let icons = weightDataMap[weight] || [];
    
    if (query) {
      const q = query.toLowerCase();
      icons = icons.filter(icon =>
        icon.name.toLowerCase().includes(q) ||
        icon.keywords.some((k: string) => k.toLowerCase().includes(q)) ||
        icon.category.toLowerCase().includes(q)
      );
    }
    
    if (category !== "all") {
      icons = icons.filter(icon => icon.category === category);
    }
    
    // Remove duplicates by name to fix the duplicate issue
    const seen = new Set();
    return icons.filter(icon => {
      if (seen.has(icon.name)) return false;
      seen.add(icon.name);
      return true;
    });
  }, [query, category, weight]);

  const categories = useMemo(() => {
    const cats = new Set<string>(["all"]);
    allIconData().forEach(icon => cats.add(icon.category));
    return Array.from(cats).sort();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Controls */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {weights.map(w => (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-all ${
                  w === weight ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1 rounded text-xs capitalize transition-all ${
                    c === category ? 'bg-accent text-accent-foreground' : 'bg-background border hover:bg-accent/50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span>Size</span>
                <input
                  type="range"
                  min={24}
                  max={96}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-20"
                />
                <span className="w-8">{size}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Stroke</span>
                <input
                  type="range"
                  min={0.5}
                  max={3}
                  step={0.1}
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="w-20"
                />
                <span className="w-8">{thickness.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-sm text-muted-foreground text-center">
          {filteredIcons.length} icons {query && `for "${query}"`}
        </div>

        {/* Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredIcons.map(icon => (
              <IconCard
                key={`${icon.name}-${weight}`}
                data={icon}
                currentWeight={weight}
                size={size}
                strokeWidth={thickness}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No icons found</p>
            <button
              onClick={() => { setCategory("all"); }}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Settings Button */}
      <button
        onClick={() => setShowSettings(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-105 transition-transform z-50"
        aria-label="Settings"
      >
        <Settings className="h-5 w-5 mx-auto" />
      </button>

      {/* Settings Modal */}
      <Modal open={showSettings} onClose={() => setShowSettings(false)}>
        <div className="space-y-4 w-80">
          <h3 className="text-lg font-semibold">Settings</h3>
          
          <div className="space-y-4">
            <label className="block">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Size</span>
                <span className="text-xs text-muted-foreground">{size}px</span>
              </div>
              <input
                type="range"
                min={24}
                max={96}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <label className="block">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Stroke</span>
                <span className="text-xs text-muted-foreground">{thickness.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={3}
                step={0.1}
                value={thickness}
                onChange={(e) => setThickness(Number(e.target.value))}
                className="w-full"
              />
            </label>
          </div>

          <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
            <strong>Shortcuts:</strong> 1-5 for weights, / for search
          </div>
        </div>
      </Modal>
    </div>
  );
}