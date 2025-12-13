import { LitElement, html, unsafeCSS, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import {
  paginationLinkVariants,
  type PaginationLinkVariants,
} from "./pagination.variants";
import tailwindStyles from "./pagination.css?inline";

@customElement("ui-pagination-link")
export class UiPaginationLink extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean }) isActive = false;
  @property({ type: String }) href = "#";
  @property({ type: String }) size: PaginationLinkVariants["size"] = "icon";

  render() {
    return html`
      <a
        href="${this.href}"
        aria-current="${this.isActive ? "page" : nothing}"
        class="${cn(
          paginationLinkVariants({ isActive: this.isActive, size: this.size })
        )}"
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-pagination-link": UiPaginationLink;
  }
}
