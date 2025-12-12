import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./toggle.css?inline";
import { cva, type VariantProps } from "class-variance-authority";

const styles = unsafeCSS(tailwindStyles);

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-200 data-[state=on]:text-slate-900",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ToggleProps = VariantProps<typeof toggleVariants>;

@customElement("ui-toggle")
export class UiToggle extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) pressed = false;
  @property() variant: ToggleProps["variant"] = "default";
  @property() size: ToggleProps["size"] = "default";
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _handleClick() {
    if (this.disabled) return;
    this.pressed = !this.pressed;
    this.dispatchEvent(new Event("change", { bubbles: true }));
    this.dispatchEvent(
      new CustomEvent("pressed-change", {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        type="button"
        aria-pressed="${this.pressed}"
        data-state="${this.pressed ? "on" : "off"}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
        class="${cn(
          toggleVariants({ variant: this.variant, size: this.size })
        )}"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-toggle": UiToggle;
  }
}
