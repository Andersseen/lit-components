import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl border border-slate-200 bg-white text-slate-950 shadow"
);

export const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");

export const cardTitleVariants = cva(
  "font-semibold leading-none tracking-tight"
);

export const cardDescriptionVariants = cva("text-sm text-slate-500");

export const cardContentVariants = cva("p-6 pt-0");

export const cardFooterVariants = cva("flex items-center p-6 pt-0");
