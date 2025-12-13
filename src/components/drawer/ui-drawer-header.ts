import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import tailwindStyles from "./drawer.css?inline";

@customElement("ui-drawer-header")
export class UiDrawerHeader extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="flex flex-col space-y-2 text-center sm:text-left">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer-header": UiDrawerHeader;
  }
}
