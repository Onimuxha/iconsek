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

  // Keyboard shortcuts: 1..5 switch weights, / focuses search handled in App
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
      const map: Record<string, Weight> = { '1':'linear','2':'bold','3':'duocolor','4':'bulk','5':'gestalt' };
      if (map[e.key]) {
        setWeight(map[e.key]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const list = useMemo(() => {
    let arr = weightDataMap[weight];
    if (query) {
      const q = query.toLowerCase();
      arr = arr.filter((i) =>
        i.name.toLowerCase().includes(q) ||
        i.keywords.some((k) => k.toLowerCase().includes(q)) ||
        i.category.toLowerCase().includes(q)
      );
    }
    if (category !== "all") arr = arr.filter((i) => i.category === category);
    return arr;
  }, [query, category, weight]);

  const categories = useMemo(() => {
    const set = new Set<string>(["all"]);
    for (const i of allIconData()) set.add(i.category);
    return Array.from(set);
  }, []);

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center gap-2">
        {weights.map((w) => (
          <button
            key={w}
            className={`pill capitalize ${w === weight ? 'pill-active' : ''}`}
            onClick={() => setWeight(w)}
          >{w}</button>
        ))}
        <div className="ml-auto flex items-center gap-3">
          {categories.map((c) => (
            <button key={c} className={`pill capitalize ${c === category ? 'pill-active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <span className="text-xs text-foreground/60">Size</span>
            <input type="range" min={16} max={128} step={1} value={size} onChange={(e)=>setSize(parseInt(e.target.value))} className="range w-32" style={{ background: `linear-gradient(to right, hsl(var(--ring)) 0%, hsl(var(--ring)) ${((size-16)/(128-16))*100}%, hsl(var(--foreground) / 0.12) ${((size-16)/(128-16))*100}%, hsl(var(--foreground) / 0.12) 100%)` }} />
            <span className="text-xs tabular-nums w-8 text-right">{size}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-foreground/60">Thick</span>
            <input type="range" min={0.5} max={3} step={0.1} value={thickness} onChange={(e)=>setThickness(parseFloat(e.target.value))} className="range w-28" style={{ background: `linear-gradient(to right, hsl(var(--ring)) 0%, hsl(var(--ring)) ${((thickness-0.5)/(3-0.5))*100}%, hsl(var(--foreground) / 0.12) ${((thickness-0.5)/(3-0.5))*100}%, hsl(var(--foreground) / 0.12) 100%)` }} />
            <span className="text-xs tabular-nums w-8 text-right">{thickness.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5">
        {list.map((icon) => {
            const id = `${icon.name}:${weight}`;
            return (
              <IconCard
                key={id}
                data={icon}
                currentWeight={weight}
                size={size}
                strokeWidth={thickness}
              />
            );
          })}
      </div>
      <button
        className="fixed bottom-6 right-6 btn shadow-glow"
        onClick={() => setShowSettings(true)}
        aria-label="Open settings"
      >
        <Settings className="h-4 w-4" />
        <span className="hidden sm:inline">Settings</span>
      </button>

      <Modal open={showSettings} onClose={() => setShowSettings(false)}>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Display settings</h3>
          <div className="grid gap-3">
            <label className="grid gap-1">
              <span className="text-sm text-foreground/70">Size: {size}px</span>
              <input type="range" min={16} max={128} step={1} value={size} onChange={(e)=>setSize(parseInt(e.target.value))} className="range w-full" style={{ background: `linear-gradient(to right, hsl(var(--ring)) 0%, hsl(var(--ring)) ${((size-16)/(128-16))*100}%, hsl(var(--foreground) / 0.12) ${((size-16)/(128-16))*100}%, hsl(var(--foreground) / 0.12) 100%)` }} />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-foreground/70">Thickness: {thickness.toFixed(1)}</span>
              <input type="range" min={0.5} max={3} step={0.1} value={thickness} onChange={(e)=>setThickness(parseFloat(e.target.value))} className="range w-full" style={{ background: `linear-gradient(to right, hsl(var(--ring)) 0%, hsl(var(--ring)) ${((thickness-0.5)/(3-0.5))*100}%, hsl(var(--foreground) / 0.12) ${((thickness-0.5)/(3-0.5))*100}%, hsl(var(--foreground) / 0.12) 100%)` }} />
            </label>
          </div>
          <div className="text-xs text-foreground/60">
            Shortcuts: 1 Linear, 2 Bold, 3 Duo, 4 Bulk, 5 Gestalt, / focus search
          </div>
        </div>
      </Modal>
    </div>
  );
}
