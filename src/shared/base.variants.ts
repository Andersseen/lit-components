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

// Using Slate/Zinc palette for shadcn feel
export const primaryColor = createColorVariant(
  "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90",
  "hover:bg-slate-800",
  "active:bg-slate-950",
  ""
);

export const successColor = createColorVariant(
  "bg-emerald-500 text-white shadow-sm hover:bg-emerald-500/90",
  "hover:bg-emerald-600",
  "active:bg-emerald-700",
  "border-emerald-600"
);

export const errorColor = createColorVariant(
  "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
  "hover:bg-red-600",
  "active:bg-red-700",
  "border-red-600"
);

export const warningColor = createColorVariant(
  "bg-amber-500 text-white shadow-sm hover:bg-amber-500/90",
  "hover:bg-amber-600",
  "active:bg-amber-700",
  "border-amber-600"
);

export const infoColor = createColorVariant(
  "bg-blue-500 text-white shadow-sm hover:bg-blue-500/90",
  "hover:bg-blue-600",
  "active:bg-blue-700",
  "border-blue-600"
);

export const secondaryColor = createColorVariant(
  "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80",
  "hover:bg-slate-200",
  "active:bg-slate-300",
  "border-slate-200"
);
