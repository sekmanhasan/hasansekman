// Minimal stand-ins for the Framer runtime APIs the ported code components import.
// Property controls only matter inside the Framer editor, so they are no-ops here.

export function addPropertyControls(..._args: unknown[]) {}

export const ControlType = new Proxy({} as Record<string, string>, {
  get: (_target, key) => String(key),
});

export function useIsStaticRenderer() {
  return false;
}

export const RenderTarget = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => "PREVIEW",
  hasRestrictions: () => false,
};
