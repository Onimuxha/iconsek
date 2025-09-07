interface IconDetailsProps {
  name: string;
  category: string;
  style: string;
  keywords: string[];
}

export function IconDetails({ name, category, style, keywords }: IconDetailsProps) {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-bold mb-2 break-words leading-tight">
        {name}
      </h3>
      <div className="text-xs sm:text-sm text-foreground/70 space-y-1">
        <p>
          <span className="font-medium">Category:</span>{" "}
          <span className="break-words">{category}</span>
        </p>
        <p>
          <span className="font-medium">Style:</span> {style}
        </p>
        <p className="break-words leading-relaxed">
          <span className="font-medium">Keywords:</span>{" "}
          {keywords.slice(0, 5).join(", ")}
          {keywords.length > 5 ? "..." : ""}
        </p>
      </div>
    </div>
  );
}