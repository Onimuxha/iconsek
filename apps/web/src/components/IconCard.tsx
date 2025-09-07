import { motion } from "framer-motion";
import type { IconData } from "../../../../packages/icons/src/types/icon";
import { copySvg, copyReactSnippet, downloadSvg } from "../lib/utils";
import { useState } from "react";
import { Modal } from "./Modal";
import { Copy, Download } from "lucide-react";
import { applySvgProps } from "../lib/svg";

export function IconCard({ data, currentWeight, size, strokeWidth }: {
  data: IconData;
  currentWeight: string;
  size: number;
  strokeWidth: number;
}) {
  const [open, setOpen] = useState(false);
  const [modalSize, setModalSize] = useState(size);
  const [modalStroke, setModalStroke] = useState(strokeWidth);

  const doCopy = (kind: "jsx" | "svg") => {
    kind === "jsx" 
      ? copyReactSnippet(data.name, currentWeight, modalSize, modalStroke)
      : copySvg(applySvgProps(data.svgContent, { strokeWidth: modalStroke }));
  };

  const handleDownload = () => downloadSvg({
    ...data,
    svgContent: applySvgProps(data.svgContent, { strokeWidth: modalStroke })
  });

  return (
    <>
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="card p-4 group h-full flex flex-col cursor-pointer hover:ring-2 ring-primary/20 hover:shadow-lg transition-all"
        onClick={() => setOpen(true)}
      >
        <div className="flex-1 grid place-items-center p-4">
          <div
            dangerouslySetInnerHTML={{
              __html: applySvgProps(data.svgContent, { strokeWidth })
            }}
            style={{ width: size, height: size }}
            className="text-foreground transition-transform group-hover:scale-110"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-sm font-medium truncate" title={data.name}>
            {data.name}
          </div>
          <div className="text-xs text-foreground/60 capitalize">
            {currentWeight}
          </div>
        </div>
      </motion.div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="grid gap-4 sm:gap-6 w-full max-w-4xl mx-auto p-2 sm:p-4">
          {/* Icon Preview and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <div className="flex-1 min-w-0">
              <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 flex items-center justify-center">
                <div
                  dangerouslySetInnerHTML={{
                    __html: applySvgProps(data.svgContent, { strokeWidth: modalStroke })
                  }}
                  style={{ width: modalSize, height: modalSize }}
                  className="text-foreground"
                />
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground/70">Size: {modalSize}px</label>
                  <input
                    type="range"
                    min={16}
                    max={128}
                    step={4}
                    value={modalSize}
                    onChange={(e) => setModalSize(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70">Stroke: {modalStroke.toFixed(1)}</label>
                  <input
                    type="range"
                    min={0.5}
                    max={3}
                    step={0.1}
                    value={modalStroke}
                    onChange={(e) => setModalStroke(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Icon Details */}
            <div className="flex-1 min-w-0 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">{data.name}</h3>
                <div className="text-xs sm:text-sm text-foreground/70 space-y-1">
                  <p><span className="font-medium">Category:</span> {data.category}</p>
                  <p><span className="font-medium">Style:</span> {currentWeight}</p>
                  <p className="break-words"><span className="font-medium">Keywords:</span> {data.keywords.join(", ")}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base"
                >
                  <Download className="h-4 w-4" />
                  Download SVG
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => doCopy("jsx")}
                    className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-xs sm:text-sm"
                  >
                    <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Copy</span> JSX
                  </button>
                  <button
                    onClick={() => doCopy("svg")}
                    className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-xs sm:text-sm"
                  >
                    <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Copy</span> SVG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="grid gap-4">
            <div>
              <div className="text-sm font-medium mb-2">Install</div>
              <div className="relative">
                <pre className="p-3 sm:p-4 overflow-auto text-xs sm:text-sm bg-foreground/5 rounded-lg border border-foreground/10">
                  <code>npm install iconsek</code>
                </pre>
                <button
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 hover:bg-foreground/10 rounded transition-colors"
                  onClick={() => navigator.clipboard?.writeText("npm install iconsek")}
                >
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">React Usage</div>
              <div className="relative">
                <pre className="p-3 sm:p-4 overflow-auto text-xs sm:text-sm bg-foreground/5 rounded-lg border border-foreground/10 max-h-40 sm:max-h-none">
                  <code>{`import { ${data.name} } from "iconsek";

export default function Example() {
  return (
    <${data.name} 
      size={${modalSize}} 
      type="${currentWeight === "duocolor" ? "duo" : currentWeight}" 
      strokeWidth={${modalStroke}} 
    />
  );
}`}</code>
                </pre>
                <button
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 hover:bg-foreground/10 rounded transition-colors"
                  onClick={() => navigator.clipboard?.writeText(`import { ${data.name} } from "iconsek";\n\nexport default function Example() {\n  return (\n    <${data.name} \n      size={${modalSize}} \n      type="${currentWeight === "duocolor" ? "duo" : currentWeight}" \n      strokeWidth={${modalStroke}} \n    />\n  );\n}`)}
                >
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}