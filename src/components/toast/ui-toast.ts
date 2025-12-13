import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./toast.css?inline";
import { toastVariants, toastCloseVariants } from "./toast.variants";
import type { ToastVariant } from "./defs";

@customElement("ui-toast")
export class UiToast extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean }) open = true;
  @property() variant: ToastVariant = "default";

  render() {
    return html`
      <div
        class="${cn(toastVariants({ variant: this.variant, open: this.open }))}"
      >
        <div class="grid gap-1">
          <slot></slot>
        </div>
        <button
          @click=${() =>
            this.dispatchEvent(
              new CustomEvent("close", { bubbles: true, composed: true })
            )}
          class="${cn(toastCloseVariants())}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-toast": UiToast;
  }
}
