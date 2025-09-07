import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsLinearData: IconData[] = [
  {
    name: "Home",
    category: "interface",
    keywords: ["home", "house", "start"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" fill="none"/></svg>',
    weights: ["all", "linear"],
  },
  {
    name: "AlignCenter",
    category: "interface",
    keywords: ["align", "center", "text"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M6 12h12"/><path d="M3 18h18"/></svg>',
    weights: ["all", "linear"],
  },
  {
    name: "Star",
    category: "shapes",
    keywords: ["star", "favorite", "rate"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 18.77 6.2 21.36l1.11-6.46-4.7-4.58 6.49-.94L12 3.5z"/></svg>',
    weights: ["all", "linear"],
  },
];

export const Home = createIcon("Home", iconsLinearData[0].svgContent);
export const AlignCenter = createIcon("AlignCenter", iconsLinearData[1].svgContent);
export const Star = createIcon("Star", iconsLinearData[2].svgContent);
