import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./pagination.css?inline";
import "./ui-pagination-item";

@customElement("ui-pagination-ellipsis")
export class UiPaginationEllipsis extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <ui-pagination-item>
        <span class="flex h-9 w-9 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
          <span class="sr-only">More pages</span>
        </span>
      </ui-pagination-item>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-pagination-ellipsis": UiPaginationEllipsis;
  }
}
