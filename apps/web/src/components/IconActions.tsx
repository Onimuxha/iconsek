import { Download, Copy } from "lucide-react";

interface IconActionsProps {
  onDownload: () => void;
  onCopyJSX: () => void;
  onCopySVG: () => void;
}

export function IconActions({ onDownload, onCopyJSX, onCopySVG }: IconActionsProps) {
  return (
    <div className="space-y-2">
      <button
        onClick={onDownload}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
      >
        <Download className="h-4 w-4 flex-shrink-0" />
        Download SVG
      </button>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onCopyJSX}
          className="flex items-center justify-center gap-1 px-2 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-xs sm:text-sm"
        >
          <Copy className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">JSX</span>
        </button>
        <button
          onClick={onCopySVG}
          className="flex items-center justify-center gap-1 px-2 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-xs sm:text-sm"
        >
          <Copy className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">SVG</span>
        </button>
      </div>
    </div>
  );
}