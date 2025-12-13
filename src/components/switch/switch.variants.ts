import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      checked: {
        true: "bg-slate-900",
        false: "bg-slate-200",
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);

export const switchThumbVariants = cva(
  "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
  {
    variants: {
      checked: {
        true: "translate-x-5",
        false: "translate-x-0",
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);
