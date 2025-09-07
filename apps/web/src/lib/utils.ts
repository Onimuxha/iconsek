import type { IconData } from "iconsek";

import type { IconData } from "iconsek";
import { toast } from "sonner";

async function writeClipboard(text: string) {
  // Try async clipboard API first
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {}
  // Fallback using execCommand
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    if (ok) return true;
  } catch {}
  return false;
}

export async function copySvg(svg: string) {
  const ok = await writeClipboard(svg);
  ok ? toast.success("SVG copied") : toast.error("Copy failed");
}

export async function copyText(text: string) {
  const ok = await writeClipboard(text);
  ok ? toast.success("Copied") : toast.error("Copy failed");
}

export async function copyReactSnippet(name: string, weight: string, size: number, strokeWidth: number) {
  const typeValue = weight === "duocolor" ? "duo" : weight;
  const snippet = `import { ${name} } from "iconsek";\n\nexport default function Example(){\n  return <${name} size={${size}} type=\"${typeValue}\" strokeWidth={${strokeWidth}} />;\n}`;
  const ok = await writeClipboard(snippet);
  ok ? toast.success("JSX usage copied") : toast.error("Copy failed");
}

export function downloadSvg(icon: IconData) {
  const blob = new Blob([icon.svgContent], { type: "image/svg+xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${icon.name}.svg`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
