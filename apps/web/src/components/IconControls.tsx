interface IconControlsProps {
  size: number;
  strokeWidth: number;
  onSizeChange: (size: number) => void;
  onStrokeChange: (stroke: number) => void;
}

export function IconControls({
  size,
  strokeWidth,
  onSizeChange,
  onStrokeChange
}: IconControlsProps) {
  return (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="text-xs sm:text-sm font-medium text-foreground/70 block mb-1">
          Size: {size}px
        </label>
        <input
          type="range"
          min={16}
          max={128}
          step={4}
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>
      <div>
        <label className="text-xs sm:text-sm font-medium text-foreground/70 block mb-1">
          Stroke: {strokeWidth.toFixed(1)}
        </label>
        <input
          type="range"
          min={0.5}
          max={3}
          step={0.1}
          value={strokeWidth}
          onChange={(e) => onStrokeChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>
    </div>
  );
}