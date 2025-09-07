import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsGestaltData: IconData[] = [
  {
    name: "HomeGestalt",
    category: "experimental",
    keywords: ["home", "house", "gestalt"],
    svgContent:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><g opacity=".6"><path d="M3 10.5L12 3l9 7.5"/></g><g opacity=".9"><path d="M5 9.5V21a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/></g></svg>',
    weights: ["all", "gestalt"],
  }
];

export const HomeGestalt = createIcon("HomeGestalt", iconsGestaltData[0].svgContent);
