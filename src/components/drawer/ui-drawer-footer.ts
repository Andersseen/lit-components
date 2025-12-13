import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./drawer.css?inline";

@customElement("ui-drawer-footer")
export class UiDrawerFooter extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div
        class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer-footer": UiDrawerFooter;
  }
}
