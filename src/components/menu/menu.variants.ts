import { cva } from "class-variance-authority";

export const menuVariants = cva(
  "min-w-[8rem] overflow-hidden rounded-md border p-1 text-slate-950 shadow-sm bg-white"
);

export const menuItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);

export const menuLabelVariants = cva(
  "px-2 py-1.5 text-sm font-semibold text-slate-950"
);

export const menuSeparatorVariants = cva("-mx-1 my-1 h-px bg-slate-100");
