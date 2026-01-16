import { cva, type VariantProps } from "class-variance-authority";
import {
  baseCvaClass,
  baseCvaAnimation,
  errorColor,
  infoColor,
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
} from "../../shared/base.variants";

export const buttonVariants = cva(
  [
    baseCvaClass,
    baseCvaAnimation,
    "inline-flex items-center justify-center relative font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [primaryColor.base, primaryColor.hover, primaryColor.active],
        success: [
          successColor.base,
          successColor.hover,
          successColor.active,
          successColor.border,
        ],
        error: [
          errorColor.base,
          errorColor.hover,
          errorColor.active,
          errorColor.border,
        ],
        warning: [
          warningColor.base,
          warningColor.hover,
          warningColor.active,
          warningColor.border,
        ],
        info: [
          infoColor.base,
          infoColor.hover,
          infoColor.active,
          infoColor.border,
        ],
        secondary: [
          secondaryColor.base,
          secondaryColor.hover,
          secondaryColor.border,
        ],
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-11 px-8 text-base",
        full: "w-full h-10 px-4 py-2 text-sm",
        icon: "h-10 w-10 justify-center",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
