import { useState } from "react";
import type { IconData } from "../../../../packages/icons/src/types/icon";
import { copySvg, copyReactSnippet, downloadSvg } from "../lib/utils";
import { Modal } from "./Modal";
import { Copy, Download } from "lucide-react";
import { applySvgProps } from "../lib/svg";
import { IconPreview } from "./IconPreview";
import { IconControls } from "./IconControls";
import { IconDetails } from "./IconDetails";
import { IconActions } from "./IconActions";
import { UsageExamples } from "./UsageExamples";

interface IconDetailModalProps {
  open: boolean;
  onClose: () => void;
  data: IconData;
  currentWeight: string;
  initialSize: number;
  initialStroke: number;
}

export function IconDetailModal({
  open,
  onClose,
  data,
  currentWeight,
  initialSize,
  initialStroke
}: IconDetailModalProps) {
  const [modalSize, setModalSize] = useState(initialSize);
  const [modalStroke, setModalStroke] = useState(initialStroke);

  const handleCopy = (kind: "jsx" | "svg") => {
    kind === "jsx" 
      ? copyReactSnippet(data.name, currentWeight, modalSize, modalStroke)
      : copySvg(applySvgProps(data.svgContent, { strokeWidth: modalStroke }));
  };

  const handleDownload = () => downloadSvg({
    ...data,
    svgContent: applySvgProps(data.svgContent, { strokeWidth: modalStroke })
  });

  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid gap-3 sm:gap-4 w-full max-w-3xl mx-auto p-3 sm:p-4 max-h-[90vh] overflow-y-auto">
        {/* Icon Preview and Controls */}
        <div className="flex flex-col xl:flex-row gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <IconPreview 
              svgContent={data.svgContent}
              size={modalSize}
              strokeWidth={modalStroke}
            />
            <IconControls
              size={modalSize}
              strokeWidth={modalStroke}
              onSizeChange={setModalSize}
              onStrokeChange={setModalStroke}
            />
          </div>

          <div className="flex-1 min-w-0 space-y-3">
            <IconDetails
              name={data.name}
              category={data.category}
              style={currentWeight}
              keywords={data.keywords}
            />
            <IconActions
              onDownload={handleDownload}
              onCopyJSX={() => handleCopy("jsx")}
              onCopySVG={() => handleCopy("svg")}
            />
          </div>
        </div>

        <UsageExamples
          iconName={data.name}
          size={modalSize}
          strokeWidth={modalStroke}
          currentWeight={currentWeight}
        />
      </div>
    </Modal>
  );
}