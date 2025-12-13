import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./pagination.css?inline";

@customElement("ui-pagination-content")
export class UiPaginationContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <ul class="flex flex-row items-center gap-1">
        <slot></slot>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-pagination-content": UiPaginationContent;
  }
}
