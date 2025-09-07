export function applySvgProps(svg: string, opts: { strokeWidth?: number; color?: string } = {}) {
  let out = svg;
  if (opts.strokeWidth != null) {
    out = out.replace(/stroke-width="[^"]*"/g, `stroke-width="${opts.strokeWidth}"`);
  }
  if (opts.color) {
    out = out.replace(/stroke="[^"]*"/g, `stroke="${opts.color}"`).replace(/fill="(?!none)[^"]*"/g, `fill="${opts.color}"`);
  }
  return out;
}
