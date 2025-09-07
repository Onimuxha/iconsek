import JSZip from "jszip";
import type { IconData } from "../../../../packages/icons/src/types/icon"; 


export async function downloadAllZip(icons: IconData[]) {
  const zip = new JSZip();
  const folder = zip.folder("icons");

  for (const icon of icons) {
    folder?.file(`${icon.name}.svg`, icon.svgContent);
  }

  const blob = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "iconsek.zip";
  a.click();
  URL.revokeObjectURL(a.href);
}
