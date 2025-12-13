import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./switch.css?inline";
import { switchVariants, switchThumbVariants } from "./switch.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-switch")
export class UiSwitch extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _handleClick() {
    if (this.disabled) return;
    this.checked = !this.checked;

    // Disparamos evento nativo 'change' y custom 'checked-change'
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    this.dispatchEvent(
      new CustomEvent("checked-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        type="button"
        role="switch"
        aria-checked="${this.checked}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
        class="${cn(switchVariants({ checked: this.checked }))}"
      >
        <span
          class="${cn(switchThumbVariants({ checked: this.checked }))}"
        ></span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-switch": UiSwitch;
  }
}
