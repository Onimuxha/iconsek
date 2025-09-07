import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsDuocolorData: IconData[] = [
  {
    name: "HomeDuocolor",
    category: "interface",
    keywords: ["home", "house"],
    svgContent:
      '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" fill="currentColor" opacity=".2"/></svg>',
    weights: ["all", "duocolor"],
  },
  {
    name: "StarDuocolor",
    category: "shapes",
    keywords: ["star", "favorite"],
    svgContent:
      '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="currentColor"><path d="M12 3.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 18.77 6.2 21.36l1.11-6.46-4.7-4.58 6.49-.94L12 3.5z" opacity=".25"/><path d="M12 3.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 18.77 6.2 21.36l1.11-6.46-4.7-4.58 6.49-.94L12 3.5z" fill="none"/></svg>',
    weights: ["all", "duocolor"],
  }
];

export const HomeDuocolor = createIcon("HomeDuocolor", iconsDuocolorData[0].svgContent);
export const StarDuocolor = createIcon("StarDuocolor", iconsDuocolorData[1].svgContent);
