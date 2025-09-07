import React from "react";
import type { IconProps } from "./types/icon";

function extractInnerSvg(svg: string) {
  const start = svg.indexOf("<svg");
  const end = svg.lastIndexOf("</svg>");
  if (start === -1 || end === -1) return { attrs: "", inner: svg };
  const tag = svg.slice(start, svg.indexOf('>', start) + 1);
  const inner = svg.slice(svg.indexOf('>', start) + 1, end);
  const attrs: Record<string, string> = {};
  Array.from(tag.matchAll(/(\w[\w-]*)=("[^"]*"|'[^']*')/g)).forEach((m) => {
    const k = m[1];
    const v = m[2].slice(1, -1);
    attrs[k] = v;
  });
  return { attrs, inner } as { attrs: Record<string, string>; inner: string };
}

export function createIcon(name: string, svgContent: string) {
  const { inner } = extractInnerSvg(svgContent);
  const Icon: React.FC<IconProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, className, style, ...rest }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke={color}
        fill={color}
        strokeWidth={strokeWidth}
        className={className}
        style={style}
        role="img"
        aria-label={rest["aria-label"] ?? name}
        {...rest}
        dangerouslySetInnerHTML={{ __html: inner }}
      />
    );
  };
  Icon.displayName = name;
  return Icon;
}
