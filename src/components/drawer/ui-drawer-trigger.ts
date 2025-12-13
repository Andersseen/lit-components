import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./drawer.css?inline";

@customElement("ui-drawer-trigger")
export class UiDrawerTrigger extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent("drawer-trigger", { bubbles: true, composed: true })
          )}
        class="cursor-pointer inline-block"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer-trigger": UiDrawerTrigger;
  }
}
