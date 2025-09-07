import { Copy } from "lucide-react";

interface UsageExamplesProps {
  iconName: string;
  size: number;
  strokeWidth: number;
  currentWeight: string;
}

export function UsageExamples({ 
  iconName, 
  size, 
  strokeWidth, 
  currentWeight 
}: UsageExamplesProps) {
  const installCommand = "npm install iconsek";
  
  const reactUsageCode = `import { ${iconName} } from "iconsek";

export default function Example() {
  return (
    <${iconName} 
      size={${size}} 
      type="${currentWeight === "duocolor" ? "duo" : currentWeight}" 
      strokeWidth={${strokeWidth}} 
    />
  );
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
  };

  return (
    <div className="grid gap-3">
      <div>
        <div className="text-sm font-medium mb-2">Install</div>
        <div className="relative">
          <pre className="p-3 overflow-x-auto text-xs bg-foreground/5 rounded-lg border border-foreground/10">
            <code>{installCommand}</code>
          </pre>
          <button
            className="absolute top-2 right-2 p-1.5 hover:bg-foreground/10 rounded transition-colors"
            onClick={() => copyToClipboard(installCommand)}
            aria-label="Copy install command"
          >
            <Copy className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium mb-2">React Usage</div>
        <div className="relative">
          <pre className="p-3 overflow-auto text-xs bg-foreground/5 rounded-lg border border-foreground/10 max-h-32 sm:max-h-40">
            <code className="whitespace-pre-wrap break-words">
              {reactUsageCode}
            </code>
          </pre>
          <button
            className="absolute top-2 right-2 p-1.5 hover:bg-foreground/10 rounded transition-colors"
            onClick={() => copyToClipboard(reactUsageCode)}
            aria-label="Copy React usage example"
          >
            <Copy className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}