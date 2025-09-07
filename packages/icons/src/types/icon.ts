import type { CSSProperties, SVGAttributes } from "react";

export type IconWeight = "linear" | "bold" | "duocolor" | "bulk" | "gestalt";

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
  className?: string;
  "aria-label"?: string;
}

export interface IconData {
  name: string;
  category: string;
  keywords: string[];
  svgContent: string; // full <svg ...>...</svg>
  weights: (IconWeight | "all")[];
}
