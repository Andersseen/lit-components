import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
  "absolute z-50 overflow-hidden rounded-md border bg-slate-900 px-3 py-1.5 text-xs text-slate-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 whitespace-nowrap shadow-md",
  {
    variants: {
      side: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
      open: {
        true: "block",
        false: "hidden",
      },
    },
    defaultVariants: {
      side: "top",
      open: false,
    },
  }
);
