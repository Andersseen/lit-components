import { cva, type VariantProps } from "class-variance-authority";

export const modalVariants = cva(
  "backdrop:bg-black/80 backdrop:backdrop-blur-sm z-50 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 rounded-lg sm:rounded-lg"
);

export const modalHeaderVariants = cva(
  "flex flex-col gap-1.5 text-center sm:text-left mb-4"
);

export const modalTitleVariants = cva(
  "text-lg font-semibold leading-none tracking-tight"
);

export const modalFooterVariants = cva(
  "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 mt-4"
);

export const modalDescriptionVariants = cva("text-sm text-slate-500");

export type ModalVariants = VariantProps<typeof modalVariants>;
export type ModalHeaderVariants = VariantProps<typeof modalHeaderVariants>;
export type ModalTitleVariants = VariantProps<typeof modalTitleVariants>;
export type ModalFooterVariants = VariantProps<typeof modalFooterVariants>;
export type ModalDescriptionVariants = VariantProps<
  typeof modalDescriptionVariants
>;
