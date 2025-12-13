import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./pagination.css?inline";

@customElement("ui-pagination-item")
export class UiPaginationItem extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <li>
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-pagination-item": UiPaginationItem;
  }
}
