import { cva } from "class-variance-authority";

export const sidebarVariants = cva(
  "group flex h-full flex-col border-r border-border bg-card text-card-foreground transition-width duration-300 ease-in-out",
);

export const sidebarHeaderVariants = cva(
  "flex h-16 items-center px-6 border-b border-border",
);

export const sidebarFooterVariants = cva(
  "flex flex-col gap-2 p-4 border-t border-border",
);

export const sidebarContentVariants = cva(
  "flex min-h-0 flex-1 flex-col gap-2 overflow-auto no-scrollbar py-4 px-3",
);

export const sidebarGroupVariants = cva(
  "relative flex w-full min-w-0 flex-col p-2",
);

export const sidebarGroupLabelVariants = cva(
  "px-2 py-1.5 text-xs font-semibold text-muted-foreground whitespace-nowrap overflow-hidden",
);

export const sidebarMenuButtonVariants = cva(
  "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      isActive: {
        true: "bg-accent/50 text-accent-foreground font-semibold shadow-sm",
        false: "text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

export const sidebarTriggerVariants = cva(
  "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer",
);

export const sidebarMenuVariants = cva("flex w-full min-w-0 flex-col gap-1");

export const sidebarMenuItemVariants = cva("relative");
