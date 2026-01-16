// Mocking values based on the user's request and shadcn-like theme

export const baseCvaClass =
  "inline-flex justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

export const baseCvaAnimation = "transition-all duration-200";

// Helper to structure color objects as expected by the CVA
const createColorVariant = (
  base: string,
  hover: string,
  active: string,
  border: string = ""
) => ({
  base,
  hover,
  active,
  border,
});

// Using Semantic Theme palette
export const primaryColor = createColorVariant(
  "bg-primary text-primary-foreground shadow",
  "hover:bg-primary/90",
  "active:scale-[0.98]",
  ""
);

export const successColor = createColorVariant(
  "bg-success text-success-foreground shadow-sm",
  "hover:bg-success/90",
  "active:scale-[0.98]",
  "border-success"
);

export const errorColor = createColorVariant(
  "bg-destructive text-destructive-foreground shadow-sm",
  "hover:bg-destructive/90",
  "active:scale-[0.98]",
  "border-destructive"
);

export const warningColor = createColorVariant(
  "bg-warning text-warning-foreground shadow-sm",
  "hover:bg-warning/90",
  "active:scale-[0.98]",
  "border-warning"
);

export const infoColor = createColorVariant(
  "bg-info text-info-foreground shadow-sm",
  "hover:bg-info/90",
  "active:scale-[0.98]",
  "border-info"
);

export const secondaryColor = createColorVariant(
  "bg-secondary text-secondary-foreground shadow-sm",
  "hover:bg-secondary/80",
  "active:scale-[0.98]",
  "border-secondary"
);
