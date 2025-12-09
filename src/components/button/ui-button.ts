import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { buttonVariants, type ButtonVariants } from "./button.variants";
import tailwindStyles from "./button.css?inline";

@customElement("ui-button")
export class UiButton extends LitElement {
  @property() variant: ButtonVariants["variant"] = "primary";
  @property() size: ButtonVariants["size"] = "md";
  @property({ type: Boolean }) disabled = false;

  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <button
        class="${cn(
          buttonVariants({ variant: this.variant, size: this.size })
        )}"
        ?disabled=${this.disabled}
      >
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
