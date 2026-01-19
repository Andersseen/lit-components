import { cva } from "class-variance-authority";

export const dropdownContentVariants = cva(
  "absolute right-0 z-[999] mt-2 w-56 origin-top-right rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 flex flex-col",
);
