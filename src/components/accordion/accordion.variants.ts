import { cva, type VariantProps } from "class-variance-authority";

export const accordionItemVariants = cva("border-b border-slate-200");

export const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-slate-900 w-full bg-transparent border-0 cursor-pointer"
);

export const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all pb-4 pt-0 text-slate-700"
);

export type AccordionItemVariants = VariantProps<typeof accordionItemVariants>;
export type AccordionTriggerVariants = VariantProps<
  typeof accordionTriggerVariants
>;
export type AccordionContentVariants = VariantProps<
  typeof accordionContentVariants
>;
