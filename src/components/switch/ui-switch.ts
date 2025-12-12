import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./switch.css?inline";

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
        class="${cn(
          // Base Layout & Animation
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",

          // COLORES FIJOS (Fix visual): Slate-900 para activo, Slate-200 para inactivo
          this.checked ? "bg-slate-900" : "bg-slate-200"
        )}"
      >
        <span
          class="${cn(
            // Thumb (Bolita): Blanca con sombra
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",

            // Translación: Tailwind h-5 es 20px. El track es w-11 (44px).
            // 44px - 4px (bordes) - 20px (thumb) = 20px de viaje.
            this.checked ? "translate-x-5" : "translate-x-0"
          )}"
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
