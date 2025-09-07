import { applySvgProps } from "../lib/svg";

interface IconPreviewProps {
  svgContent: string;
  size: number;
  strokeWidth: number;
}

export function IconPreview({ svgContent, size, strokeWidth }: IconPreviewProps) {
  return (
    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 flex items-center justify-center min-h-[120px] sm:min-h-[150px]">
      <div
        dangerouslySetInnerHTML={{
          __html: applySvgProps(svgContent, { strokeWidth })
        }}
        style={{ width: size, height: size }}
        className="text-foreground"
      />
    </div>
  );
}