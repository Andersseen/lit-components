import { LitElement, html, unsafeCSS, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { buttonVariants, type ButtonVariants } from "./button.variants";
import tailwindStyles from "./button.css?inline";

@customElement("ui-button")
export class UiButton extends LitElement {
  @property() variant: ButtonVariants["variant"] = "primary";
  @property() size: ButtonVariants["size"] = "md";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ attribute: "aria-label" }) ariaLabel = "";

  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    const isLocalDisabled = this.disabled || this.loading;

    return html`
      <button
        class="${cn(
          buttonVariants({ variant: this.variant, size: this.size }),
          this.loading && "opacity-70 cursor-not-allowed" // Additional loading styles
        )}"
        ?disabled=${isLocalDisabled}
        aria-label=${this.ariaLabel || nothing}
      >
        ${this.loading
          ? html`<svg
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>`
          : nothing}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-button": UiButton;
  }
}
