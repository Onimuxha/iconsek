import {
  iconsLinearData,
  iconsBoldData,
  iconsDuocolorData,
  iconsBulkData,
  iconsGestaltData,
} from "iconsek";
import type { IconData } from "iconsek";

export type Weight = "linear" | "bold" | "duocolor" | "bulk" | "gestalt";

export const weightDataMap: Record<Weight, IconData[]> = {
  linear: iconsLinearData,
  bold: iconsBoldData,
  duocolor: iconsDuocolorData,
  bulk: iconsBulkData,
  gestalt: iconsGestaltData,
};

export function allIconData(): IconData[] {
  const names = new Set<string>();
  const merged: IconData[] = [];
  for (const w of Object.values(weightDataMap)) {
    for (const d of w) {
      // Use name as key per-weight list contains distinct names
      merged.push(d);
      names.add(d.name);
    }
  }
  return merged;
}
