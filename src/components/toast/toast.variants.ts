import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
  {
    variants: {
      variant: {
        default: "bg-white border-slate-200 text-slate-950",
        success: "bg-green-50 border-green-200 text-green-900",
        error: "bg-red-50 border-red-200 text-red-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
      },
      open: {
        true: "data-[state=open]",
        false: "data-[state=closed] hidden",
      },
    },
    defaultVariants: {
      variant: "default",
      open: true,
    },
  }
);

export const toastCloseVariants = cva(
  "absolute right-2 top-2 rounded-md p-1 opacity-50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
);
