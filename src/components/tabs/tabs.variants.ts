import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 w-full"
);

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      isActive: {
        true: "bg-white text-slate-950 shadow-sm",
        false: "hover:bg-slate-200 hover:text-slate-900",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

export const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
);
