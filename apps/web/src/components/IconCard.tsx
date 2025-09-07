import { motion } from "framer-motion";
import type { IconData } from "../../../../packages/icons/src/types/icon";
import { useState } from "react";
import { applySvgProps } from "../lib/svg";
import { IconDetailModal } from "./IconDetailModal";

export function IconCard({ 
  data, 
  currentWeight, 
  size, 
  strokeWidth 
}: {
  data: IconData;
  currentWeight: string;
  size: number;
  strokeWidth: number;
}) {
  const [open, setOpen] = useState(false);

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

      <IconDetailModal
        open={open}
        onClose={() => setOpen(false)}
        data={data}
        currentWeight={currentWeight}
        initialSize={size}
        initialStroke={strokeWidth}
      />
    </>
  );
}