import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import tailwindStyles from "./pagination.css?inline";
import "./ui-pagination-item";
import "./ui-pagination-link";

@customElement("ui-pagination-previous")
export class UiPaginationPrevious extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: String }) href = "#";

  render() {
    return html`
      <ui-pagination-item>
        <ui-pagination-link
          href="${this.href}"
          aria-label="Go to previous page"
          class="gap-1 pl-2.5 h-auto w-auto p-2"
          size="default"
        >
          <span class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Previous</span>
          </span>
        </ui-pagination-link>
      </ui-pagination-item>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-pagination-previous": UiPaginationPrevious;
  }
}
