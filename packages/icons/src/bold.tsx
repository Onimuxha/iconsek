import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsBoldData: IconData[] = [
  {
    name: "HomeBold",
    category: "interface",
    keywords: ["home", "start"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 10.5L12 3l9 7.5v9.5a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9.5z"/></svg>',
    weights: ["all", "bold"],
  },
  {
    name: "StarBold",
    category: "shapes",
    keywords: ["star", "favorite", "rate"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 18.77 6.2 21.36l1.11-6.46-4.7-4.58 6.49-.94L12 3.5z"/></svg>',
    weights: ["all", "bold"],
  }
];

export const HomeBold = createIcon("HomeBold", iconsBoldData[0].svgContent);
export const StarBold = createIcon("StarBold", iconsBoldData[1].svgContent);
