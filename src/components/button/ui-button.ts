import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { buttonVariants, type ButtonVariants } from "./button.variants";
import { type IconName } from "../icon/icons";
import "../icon/ui-icon";
import { tailwindStyles } from "../../styles/shared";

@customElement("ui-button")
export class UiButton extends LitElement {
  @property() variant: ButtonVariants["variant"] = "primary";
  @property() size: ButtonVariants["size"] = "md";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: String }) type: "button" | "submit" | "reset" = "button";
  @property({ type: String }) iconLeft?: IconName;
  @property({ type: String }) iconRight?: IconName;
  @property({ attribute: "aria-label" }) ariaLabel = "";

  static styles = [tailwindStyles];

  private getIconSize() {
    switch (this.size) {
      case "sm":
        return 14;
      case "lg":
        return 20;
      default:
        return 16;
    }
  }

  render() {
    const isLocalDisabled = this.disabled || this.loading;
    const iconSize = this.getIconSize();

    return html`
      <button
        type="${this.type}"
        class="${cn(
          buttonVariants({ variant: this.variant, size: this.size })
        )}"
        ?disabled=${isLocalDisabled}
        aria-label=${this.ariaLabel || nothing}
        aria-busy=${this.loading}
      >
        ${this.loading
          ? html`<ui-icon
              name="loader"
              .size=${iconSize}
              class="animate-spin mr-2"
            ></ui-icon>`
          : this.iconLeft
          ? html`<ui-icon
              name=${this.iconLeft}
              .size=${iconSize}
              class="mr-2"
            ></ui-icon>`
          : nothing}

        <slot></slot>

        ${!this.loading && this.iconRight
          ? html`<ui-icon
              name=${this.iconRight}
              .size=${iconSize}
              class="ml-2"
            ></ui-icon>`
          : nothing}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-button": UiButton;
  }
}
