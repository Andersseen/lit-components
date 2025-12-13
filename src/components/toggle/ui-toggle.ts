import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./toggle.css?inline";
import { type VariantProps } from "class-variance-authority";
import { toggleVariants } from "./toggle.variants";

const styles = unsafeCSS(tailwindStyles);

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
