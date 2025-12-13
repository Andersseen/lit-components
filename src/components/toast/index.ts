export * from "./ui-toast";
export * from "./ui-toaster";
export * from "./toast.variants";
export * from "./defs";

import type { ToastOptions } from "./defs";

export function toast(options: ToastOptions) {
  const event = new CustomEvent("show-toast", {
    detail: options,
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(event);
}
