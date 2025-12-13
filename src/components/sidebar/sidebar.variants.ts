import { cva } from "class-variance-authority";

export const sidebarVariants = cva(
  "group flex h-full flex-col border-r border-slate-200 bg-white text-slate-950 transition-width duration-300 ease-in-out"
);

export const sidebarHeaderVariants = cva(
  "flex h-14 items-center px-4 border-b border-slate-100"
);

export const sidebarFooterVariants = cva(
  "flex flex-col gap-2 p-2 border-t border-slate-100"
);

export const sidebarContentVariants = cva(
  "flex min-h-0 flex-1 flex-col gap-2 overflow-auto no-scrollbar py-2"
);

export const sidebarGroupVariants = cva(
  "relative flex w-full min-w-0 flex-col p-2"
);

export const sidebarGroupLabelVariants = cva(
  "px-2 py-1.5 text-xs font-semibold text-slate-500 whitespace-nowrap overflow-hidden"
);

export const sidebarMenuButtonVariants = cva(
  "flex w-full items-center rounded-md text-sm font-medium transition-colors duration-200 outline-none hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-950",
  {
    variants: {
      isActive: {
        true: "bg-slate-100 text-slate-900 shadow-sm",
        false: "text-slate-500 hover:text-slate-900",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

export const sidebarTriggerVariants = cva(
  "inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
);

export const sidebarMenuVariants = cva("flex w-full min-w-0 flex-col gap-1");

export const sidebarMenuItemVariants = cva("relative");
