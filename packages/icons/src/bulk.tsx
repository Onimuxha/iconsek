import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsBulkData: IconData[] = [
  {
    name: "HomeBulk",
    category: "interface",
    keywords: ["home", "house"],
    svgContent:
      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 10.5L12 3l9 7.5v9.5a2 2 0 0 1-2 2h-5v-6H9v6H4a2 2 0 0 1-2-2v-9.5z"/></svg>`,
    weights: ["all", "bulk"],
  }
];

export const HomeBulk = createIcon("HomeBulk", iconsBulkData[0].svgContent);
