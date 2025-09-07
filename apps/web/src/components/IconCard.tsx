import { motion } from "framer-motion";
import type { IconData } from "../../../../packages/icons/src/types/icon";
import { copySvg, copyReactSnippet, downloadSvg } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { Copy, Download, Info } from "lucide-react";
import { applySvgProps } from "../lib/svg";
import { copyText } from "../lib/utils";

export function IconCard({ data, currentWeight, size, strokeWidth }: {
  data: IconData;
  currentWeight: string;
  size: number;
  strokeWidth: number;
}) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpenMenu(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openMenu]);
  function doCopy(kind: "jsx" | "svg"){
    if (kind === "jsx") copyReactSnippet(data.name, currentWeight, size, strokeWidth);
    if (kind === "svg") copySvg(applySvgProps(data.svgContent, { strokeWidth }));
    setOpenMenu(false);
  }
  return (
    <>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.15 }}
        className="card p-3 group h-full flex flex-col hover:ring-1 ring-foreground/15"
      >
        <div className="flex-1 grid place-items-center p-4">
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition bg-primary/30 rounded-full" />
            <div dangerouslySetInnerHTML={{ __html: applySvgProps(data.svgContent, { strokeWidth }) }} className="w-full h-full text-foreground" />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm font-medium truncate" title={data.name}>{data.name}</div>
          <div className="text-xs text-foreground/60 capitalize">{currentWeight}</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="relative" ref={menuRef}>
              <button className="select w-full text-left" onClick={()=>setOpenMenu((v)=>!v)}>Copy…</button>
              {openMenu && (
                <div className="menu" role="menu">
                  <button className="menu-item" onMouseDown={()=>doCopy("jsx")}>Copy JSX usage</button>
                  <button className="menu-item" onMouseDown={()=>doCopy("svg")}>Copy SVG markup</button>
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-end">
              <button className="icon-btn" onClick={() => downloadSvg({ ...data, svgContent: applySvgProps(data.svgContent, { strokeWidth }) })} title="Download SVG" aria-label="Download SVG"><Download className="h-4 w-4 mx-auto"/></button>
              <button className="icon-btn" onClick={() => setOpen(true)} title="Details" aria-label="Details"><Info className="h-4 w-4 mx-auto"/></button>
            </div>
          </div>
        </div>
      </motion.div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg bg-foreground/5">
              <div dangerouslySetInnerHTML={{ __html: applySvgProps(data.svgContent, { strokeWidth }) }} style={{ width: size, height: size }} className="text-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
              <p className="text-sm text-foreground/70">Category: {data.category}</p>
              <p className="text-sm text-foreground/70">Keywords: {data.keywords.join(", ")}</p>
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <div className="text-sm font-medium mb-1">Install</div>
              <div className="relative">
                <pre className="relative card p-3 overflow-auto text-xs pr-8"><code>npm i iconsek</code></pre>
                <button className="icon-btn absolute top-2 right-2" aria-label="Copy install" onClick={()=>copyText('npm i iconsek')}><Copy className="h-3.5 w-3.5"/></button>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Usage</div>
              <div className="relative">
                <pre className="relative card p-3 overflow-auto text-xs pr-8"><code>{`import { ${data.name} } from "iconsek";

export default function Example(){
  return <${data.name} size={${size}} type="${currentWeight === 'duocolor' ? 'duo' : currentWeight}" strokeWidth={${strokeWidth}} />
}`}</code></pre>
                <button className="icon-btn absolute top-2 right-2" aria-label="Copy usage" onClick={()=>copyText(`import { ${data.name} } from \"iconsek\";\n\nexport default function Example(){\n  return <${data.name} size={${size}} type=\"${currentWeight === 'duocolor' ? 'duo' : currentWeight}\" strokeWidth={${strokeWidth}} />\n}`)}><Copy className="h-3.5 w-3.5"/></button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
