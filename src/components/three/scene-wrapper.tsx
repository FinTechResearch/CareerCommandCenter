"use client";

import dynamic from "next/dynamic";

/**
 * The 3D scene is client-only: R3F needs WebGL + the DOM, so we
 * dynamically import it with SSR disabled and render a subtle
 * fallback glow while it hydrates.
 */
const CommandScene = dynamic(() => import("./command-scene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.83_0.18_156/8%),transparent_60%)]"
    />
  ),
});

export function SceneWrapper() {
  return (
    <div aria-hidden className="absolute inset-0">
      <CommandScene />
    </div>
  );
}