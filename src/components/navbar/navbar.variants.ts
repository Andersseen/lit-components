import { cva, type VariantProps } from "class-variance-authority";

export const navbarVariants = cva(
  "flex h-14 items-center gap-4 border-b border-slate-200 bg-white px-6 shadow-sm"
);

export const navbarBrandVariants = cva(
  "mr-4 hidden md:flex font-bold text-lg text-slate-900"
);

export const navbarContentVariants = cva(
  "flex flex-1 items-center justify-end gap-2"
);

export type NavbarVariants = VariantProps<typeof navbarVariants>;
export type NavbarBrandVariants = VariantProps<typeof navbarBrandVariants>;
export type NavbarContentVariants = VariantProps<typeof navbarContentVariants>;
